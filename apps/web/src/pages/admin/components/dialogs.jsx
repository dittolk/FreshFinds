import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import success from '../../../assets/admin/success.png'
import { useNavigate } from "react-router-dom";

export function SuccessDialog({ content, openSDialog, handleOpenSDialog, action }) {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        if(action === 'login'){
            navigate('/login-admin')
        }
    }

    return (
        <Dialog open={openSDialog} handler={handleOpenSDialog} size="xs">
            <DialogHeader>Success</DialogHeader>
            <DialogBody>
                <div className="flex flex-col items-center gap-2">
                {content}
                <img className="flex h-60 w-60 object-cover" src={success} alt="success image">
                </img>
                </div>
            </DialogBody>
            <DialogFooter>
                {action === 'login' ? 
                <Button variant="filled" color="green" fullWidth onClick={handleNavigate}>
                    <span>Login</span>
                </Button> 
                : 
                <Button variant="gradient" color="green" onClick={handleOpenSDialog}>
                    <span>Ok</span>
                </Button>}
            </DialogFooter>
        </Dialog>
    )
}

export function ExpiredToken({content, openDialog, handleOpen}){

    return(
        <Dialog open={openDialog} handler={handleOpen} dismiss={{enabled: false}} size="xs">
            <DialogHeader>Your session has expired</DialogHeader>
            <DialogBody>
                <div className="flex flex-col items-center gap-2">
                {content}
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="filled" color="green" fullWidth>
                    <span>Login</span>
                </Button> 
            </DialogFooter>
        </Dialog>
    )
}