import "./toggleswitch.css";
import React, {useState, useEffect} from "react";
import Axios from 'axios'

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import GetAppIcon from '@mui/icons-material/GetApp';
import DialoguBox from "../../components/dialogueBox";
import { CircularProgress } from "@mui/material";
import ProductDetailDialogueBox from "../../components/ProductDetailDialogueBox";


export default function ToggleSwitch(){
    let [val, setVal] = useState(true);
    let [data, setData] = useState(null);
    let [displayLoader, setDisplayLoader] =  useState(false);
    let [currItem, setCurrItem] = useState(null)

    // vals for dialogue box
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // vals for product details dialogue box
    const [openProductDetails, setOpenProductDetails] = React.useState(false);

    const handleClickOpenProductDetails = () => {
        setOpenProductDetails(true);
    };
    const handleCloseProductDetails = () => {
        setOpenProductDetails(false);
    };


    function handleClick() {
        setVal(!val)
    }
 
    const getData = () => {
        if(data){
            handleClickOpen();
        } else{
            setDisplayLoader(true);
            Axios.get("https://dummyjson.com/products")
            .then(res =>{
                setTimeout(()=>{
                    setData(res?.data?.products);
                    setDisplayLoader(false)
                }, 3000)
            })
        }
    }

    const diplayProductDetails = (item) => {
        setOpenProductDetails(true);
        setCurrItem(item);
        console.log(item, ">>>>>>>.card is clicked")
    }

    // console.log(data,">>>>Data")
    return(
        <div className="main-container toggle-switch-container">
            <h3>Task-02: Toggle Switch</h3>

            <div className="content-container">
                <div className="component-container">
                    <Button onClick={getData} variant="contained" endIcon={<GetAppIcon />}>Get Data</Button>
                    <Switch defaultChecked onClick={handleClick} disabled={data ? false : true} />
                </div>
                <div className={`display-container`}>
                    {
                        displayLoader ? <CircularProgress style={{width: "100px", height: "100px"}} /> : (
                            val &&
                            data &&
                            data.map((item, id) => {
                                return (
                                    <div className="card-container" onClick={()=>diplayProductDetails(item)}>
                                        <div className="image-container">
                                            <img src={item.thumbnail}/>
                                        </div>
                                        <div className="details-container">
                                            <p><strong>Price :</strong> {`${item.price}`}</p><p></p>
                                            <p><strong>Brand :</strong>{`${item.brand}`}</p>
                                            <p><strong>Description :</strong> {`${item.description}`}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
            
            <DialoguBox handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} message={"Data has already been got, try switching the switch"} title={"Data Note"} />
        
            <ProductDetailDialogueBox handleClickOpen={handleClickOpenProductDetails} handleClose={handleCloseProductDetails} open={openProductDetails} currItem={currItem} />
        
        </div>
        
    )
}
