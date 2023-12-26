import "../CSS/Create.css";
import {
    Box,
    Button,
    Divider,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Service from "../Services/Service";

export default function DeletePop({ Id, isDelete, setisDelete, getDetails }) {

    const onDeny = () => {
        setisDelete(!isDelete);
        getDetails();
    }

    const onAccept = async () => {
        try {
            console.log(await Service.delete(Id));
            setisDelete(!isDelete);
            getDetails();
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    return (
        <>
            <div className="create-container">
                <Container maxWidth="xs">
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        justifyContent="center"
                        style={{ minHeight: "100vh" }}
                    >
                        <Paper
                            elevation={16}
                            sx={{
                                padding: 3,
                                borderRadius: 5,
                                bgcolor: "white",
                            }}
                        >
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Box sx={{ p: 2 }}>
                                        <Typography variant="h6">Delete Donor</Typography>
                                    </Box>
                                </Grid>
                                <Divider />
                                <form>
                                    <Box sx={{ padding: 1 }}>

                                        <Grid item>
                                            <Box sx={{ p: 2 }}>
                                                <Typography>Are You sure, want to Delete ?</Typography>
                                            </Box>
                                        </Grid>
                                        <br />
                                        <Grid
                                            item
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                direction: "row",
                                            }}
                                        >
                                            <Box sx={{ p: 2, display: "flex" }}>
                                                <Box sx={{ padding: 1 }}>
                                                    <Button
                                                        type="submit"
                                                        color="error"
                                                        variant="contained"
                                                        sx={{
                                                            color: "black",
                                                        }}
                                                        onClick={onDeny}
                                                    >
                                                        NO
                                                    </Button>
                                                </Box>
                                                <Box sx={{ padding: 1 }}>
                                                    <Button                                                        
                                                        color="success"
                                                        variant="contained"
                                                        onClick={onAccept}
                                                        sx={{
                                                            bgcolor: "rgb(51, 102, 255)",
                                                            color: "black",
                                                        }}
                                                    >
                                                        YES
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Box>
                                </form>
                            </Grid>
                        </Paper>
                    </Grid>
                </Container>
            </div>
        </>
    );
}