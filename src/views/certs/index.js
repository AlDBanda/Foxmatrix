import React, { useState, useEffect, useCallback } from 'react';
import { Autocomplete, Grid, TextField, List, ListItem, ListItemText, Typography, Button, Alert } from '@mui/material';

const Certificates = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeCourses, setEmployeeCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [certificateFile, setCertificateFile] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    // Fetch employees once when the component mounts
    useEffect(() => {
        fetchEmployees();
    }, []);

    // Fetch employee courses whenever a new employee is selected
    useEffect(() => {
        if (selectedEmployee) {
            fetchEmployeeCourses();
        }
    }, [selectedEmployee]);

    // Fetch employees from API
    const fetchEmployees = () => {
        fetch('https://glowing-paradise-cfe00f2697.strapiapp.com/api/employees')
            .then((response) => response.json())
            .then((data) => {
                const formattedEmployees = data.data.map((employee) => ({
                    label: employee.attributes.fullname,
                    id: employee.id,
                    ...employee.attributes
                }));
                setEmployees(formattedEmployees);
            })
            .catch((error) => console.error('Error fetching employees:', error));
    };

    // Fetch courses of the selected employee from API
    const fetchEmployeeCourses = useCallback(() => {
        fetch(
            `https://glowing-paradise-cfe00f2697.strapiapp.com/api/employee-courses?filters[employee][id][$eq]=${selectedEmployee.id}&populate[course]=name`
        )
            .then((response) => response.json())
            .then((data) => {
                setEmployeeCourses(data.data);
            })
            .catch((error) => console.error('Error fetching employee courses:', error));
    }, [selectedEmployee]);

    // Handle file input change event
    const handleCertificateUpload = (event) => {
        const file = event.target.files[0];
        setCertificateFile(file);
    };

    // Handle certificate submission
    const handleCertificateSubmit = () => {
        if (selectedCourse && certificateFile) {
            const formData = new FormData();
            formData.append('files.certificate', certificateFile);
            formData.append(
                'data',
                JSON.stringify({
                    employee: selectedEmployee.id,
                    course: selectedCourse.attributes.course.data.id
                })
            );

            fetch('https://glowing-paradise-cfe00f2697.strapiapp.com/api/certificates', {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Certificate uploaded successfully:', data);
                    setUploadSuccess(true);
                    setTimeout(() => {
                        setUploadSuccess(false);
                    }, 3000);
                })
                .catch((error) => {
                    console.error('Error uploading certificate:', error);
                    // Handle the error scenario
                });
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Add a certificate: please start by selecting an employee</Typography>
            </Grid>

            <Grid item xs={12}>
                <Autocomplete
                    disableClearable
                    options={employees}
                    getOptionLabel={(option) => option.label}
                    onChange={(event, newValue) => setSelectedEmployee(newValue)}
                    renderInput={(params) => <TextField {...params} label="Select Employee" />}
                />
            </Grid>

            {selectedEmployee && (
                <Grid item xs={12}>
                    <Typography variant="h6">Select a Course to upload a Certificate for {selectedEmployee.label}</Typography>
                    <Typography variant="body1">Upload one certificate at a time</Typography>

                    {employeeCourses.length > 0 ? (
                        <List>
                            {employeeCourses.map((employeeCourse) => (
                                <ListItem
                                    key={employeeCourse.id}
                                    onClick={() => setSelectedCourse(employeeCourse)}
                                    button
                                    selected={selectedCourse === employeeCourse}
                                    style={{ backgroundColor: selectedCourse === employeeCourse ? 'lightblue' : 'inherit' }}
                                >
                                    <ListItemText primary={employeeCourse.attributes.course.data.attributes.name} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Typography>No courses completed yet.</Typography>
                    )}
                </Grid>
            )}

            {selectedCourse && (
                <Grid item xs={12}>
                    <Typography variant="h6">Upload Certificate for {selectedCourse.attributes.course.data.attributes.name}</Typography>
                    <input type="file" onChange={handleCertificateUpload} />
                    <Button variant="contained" onClick={handleCertificateSubmit} disabled={!certificateFile}>
                        Upload Certificate
                    </Button>
                    {uploadSuccess && (
                        <Alert severity="success" style={{ marginTop: '1rem' }}>
                            Training Certificate has been successfully uploaded!
                        </Alert>
                    )}
                </Grid>
            )}
        </Grid>
    );
};

export default Certificates;