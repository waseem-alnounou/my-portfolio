import React from "react";
import Paper from '@mui/material/Paper';
import '../../assets/style/shared/main.css'

export default function ProfileHeader(args) {
    return (
        <Paper elevation={3} className="colorSecondary" >        
            <img
                src={args.src}
                alt={args.alt}
            />
        </Paper>
    )
}
