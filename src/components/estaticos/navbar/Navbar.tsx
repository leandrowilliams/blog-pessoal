import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from "react-toastify";

function Navbar() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch= useDispatch();

    function goLogout() {
        dispatch(addToken(""));
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push("/login")
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#E8D3B6" }}>
            <Toolbar variant="dense" >
                <Box style={{ cursor: "pointer" }} >
                    <Typography variant="h5" className="titulo">
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" className="texto">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                        <Typography variant="h6" className="texto">
                            logout
                        </Typography>
                    </Box>


                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
           {navbarComponent}
        </>
    )
}

export default Navbar;