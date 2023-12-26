import "../CSS/Create.css";
import {
    Box,
    Button,
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import Service from "../Services/Service";
import { useForm } from "react-hook-form";

export default function Create({ addDonor, setaddDonor, getDetails }) {

    const isaddDonor = () => {
        setaddDonor(!addDonor);
    };


    const {
        register, handleSubmit, formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            await Service.create(data);
            setaddDonor(!addDonor);
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
                                        <Typography variant="h6">New Donor</Typography>
                                    </Box>
                                </Grid>
                                <Divider />
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <Box sx={{ padding: 2 }}>
                                        <Grid item>
                                            <Box sx={{ p: 2 }}>
                                                <TextField
                                                    name="Username"
                                                    fullWidth
                                                    label="UserName"
                                                    placeholder="Enter username"
                                                    variant="standard"
                                                    autoFocus
                                                    {...register("username", {
                                                        required: "Required"
                                                    })}
                                                    error={!!errors?.username}
                                                    helperText={errors?.username ? errors.username.message : null}
                                                ></TextField>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ p: 2 }}>
                                                <TextField
                                                    name="age"
                                                    fullWidth
                                                    label="Age"
                                                    placeholder="Example : 19"
                                                    variant="standard"
                                                    autoFocus
                                                    {...register("age", {
                                                        required: "Required"
                                                    })}
                                                    error={!!errors?.age}
                                                    helperText={errors?.age ? errors.age.message : null}
                                                ></TextField>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ p: 2 }}>
                                                <TextField
                                                    name="disease"
                                                    fullWidth
                                                    label="Disease"
                                                    placeholder="Related to Blood *"
                                                    variant="standard"
                                                    autoFocus
                                                    {...register("disease", {
                                                        required: "Required"
                                                    })}
                                                    error={!!errors?.disease}
                                                    helperText={errors?.disease ? errors.disease.message : null}
                                                ></TextField>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ p: 2 }}>
                                                <TextField
                                                    name="blood_group"
                                                    fullWidth
                                                    label="Blood Group"
                                                    placeholder="Example : O+ve"
                                                    variant="standard"
                                                    autoFocus
                                                    {...register("blood_group", {
                                                        required: "Required"
                                                    })}
                                                    error={!!errors?.blood_group}
                                                    helperText={errors?.blood_group ? errors.blood_group.message : null}
                                                ></TextField>
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
                                                <Box sx={{ padding: 2 }}>
                                                    <Button
                                                        type="submit"
                                                        color="error"
                                                        variant="contained"
                                                        startIcon={<SaveRoundedIcon />}
                                                        sx={{
                                                            color: "black",
                                                        }}
                                                        onClick={isaddDonor}
                                                    >
                                                        cancel
                                                    </Button>
                                                </Box>
                                                <Box sx={{ padding: 2 }}>
                                                    <Button
                                                        type="submit"
                                                        color="success"
                                                        variant="contained"
                                                        startIcon={<SaveRoundedIcon />}
                                                        sx={{
                                                            bgcolor: "rgb(51, 102, 255)",
                                                            color: "black",
                                                        }}
                                                    >
                                                        Save
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