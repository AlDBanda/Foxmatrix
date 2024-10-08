// DashboardCoSkill.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import EmployeeTable from './EmployeeTable';

function DashboardCoSkill() {
    const { company, skill } = useParams();
    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const response = await axios.get(
                    `https://glowing-paradise-cfe00f2697.strapiapp.com/api/companies?filters[website][$eq]=${company}&populate=*`
                );
                if (response.data && response.data.data.length > 0) {
                    setCompanyData(response.data.data[0].attributes);
                }
            } catch (error) {
                console.error('Error fetching company data:', error);
            }
        };

        fetchCompanyData();
    }, [company]);

    const getLogoUrl = (companyData) => {
        if (companyData.logo && companyData.logo.data.length > 0) {
            const logoAttributes = companyData.logo.data[0].attributes;
            const logoFormats = logoAttributes.formats;

            if (logoFormats) {
                if (logoFormats.medium) {
                    return logoFormats.medium.url;
                } else if (logoFormats.small) {
                    return logoFormats.small.url;
                } else if (logoFormats.thumbnail) {
                    return logoFormats.thumbnail.url;
                }
            }

            return logoAttributes.url;
        }
        return '';
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            {companyData && getLogoUrl(companyData) && (
                                <CardMedia
                                    component="img"
                                    image={getLogoUrl(companyData)}
                                    alt={`${companyData.name} Logo`}
                                    sx={{
                                        maxWidth: '100%',
                                        maxHeight: '140px',
                                        objectFit: 'contain',
                                        margin: 'auto'
                                    }}
                                />
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            {companyData && (
                                <>
                                    <Typography variant="h3" component="div">
                                        {companyData.name}
                                    </Typography>
                                    <Typography variant="subtitle" color="text.secondary">
                                        {companyData.address1}
                                    </Typography>
                                    <Typography variant="subtitle" color="text.secondary">
                                        {companyData.address2}
                                    </Typography>
                                </>
                            )}
                            <Typography variant="h3" component="div">
                                {skill} Role
                            </Typography>
                            Employees below are skilled in this role: {skill}.
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Employee Table
                            </Typography>
                            <EmployeeTable company={company} skill={skill} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default DashboardCoSkill;
