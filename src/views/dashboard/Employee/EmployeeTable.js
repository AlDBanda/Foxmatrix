import React, { useEffect, useState } from 'react';
import { LicenseInfo, DataGridPro } from '@mui/x-data-grid-pro';

// Set the license key for DataGridPro
LicenseInfo.setLicenseKey('327232b2db55ef771ee9917fc6f4ef22Tz03MzU1MSxFPTE3MjQ3MDc0NzEwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

const EmployeeTable = ({ company }) => {
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = 'http://localhost:1337/api'; // Local API URL
    const BEARER_TOKEN = 'abae5c5bbc3ab787e7538ac265978d265404bd7160dec53eba35895fe8f5d3b1af62fef2ef0715a2d9b6e569cf7cd42a47b5459dd7925223bc0f4bcc23555ea01d5e22bdfde1b021502c25f43c8d872c8f7dd9950a5e4cefcca811be1c395072ad4aebfe4bd449c2e314e83ac860b90d1f21ae877073de01deb6f97a752a64b2';

    useEffect(() => {
        const fetchEmployeesForCompany = async () => {
            setLoading(true);
            try {
                // Fetch all employees and include related company data
                const response = await fetch(`${API_URL}/employees/?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${BEARER_TOKEN}`
                    }
                });
                const data = await response.json();

                // Filter employees based on the company's website identifier matching the 'company' prop
                const filteredEmployees = data.data.filter(
                    (employee) => employee.attributes.company.data.attributes.website === company
                );

                const transformedEmployees = filteredEmployees.map(({ id, attributes }) => ({
                    id,
                    name: attributes.fullname,
                    jobtitle: attributes.jobtitle,
                    email: attributes.email,
                    hometel: attributes.hometel,
                    mobiletel: attributes.mobiletel,
                    startdate: attributes.startdate,
                    companyBranch: attributes.CompanyBranch // Include the company branch if needed
                }));

                setTableData(transformedEmployees);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployeesForCompany();
    }, [company]); // Dependency on 'company' prop to re-run this effect

    // Define the columns for your DataGridPro component
    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'jobtitle', headerName: 'Job Title', width: 200 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'hometel', headerName: 'Home Tel', width: 150 },
        { field: 'mobiletel', headerName: 'Mobile Tel', width: 150 },
        { field: 'startdate', headerName: 'Start Date', width: 150 },
        { field: 'companyBranch', headerName: 'Company Branch', width: 200 }
    ];

    return (
        <DataGridPro
            rows={tableData}
            columns={columns}
            pageSize={5}
            checkboxSelection
            loading={loading}
            autoHeight
            style={{ height: '100%', width: '100%' }}
        />
    );
};

export default EmployeeTable;