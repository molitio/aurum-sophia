import { Typography } from '@material-ui/core';
import React from 'react';
import { TContactInfo } from '../common/type/TContactInfo';
import { PhoneContactComponentProps } from './interface/PhoneContactComponentProps';

export const PhoneContactComponent = ({ contact }: PhoneContactComponentProps): JSX.Element => {
    return (
        <>
            <Typography gutterBottom={false} variant="body2">
                {contact.name}
            </Typography>
            <Typography gutterBottom={false} variant="body2">
                {`(${contact.role})`}
            </Typography>
            <Typography gutterBottom={false} variant="body2">
                {contact.phoneNumber}
            </Typography>
        </>
    );
};
