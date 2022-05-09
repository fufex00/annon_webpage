import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from './Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage() {


    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.length <= 0 || value.length < 15) {
            console.log("you need more that 15 characters");
            toast.warn("Your post must have at least 15 caracters.", {
                theme: "dark",
                position: "bottom-right",
            });
        } else {
            console.log(value);
            setValue('');
            axios.post('https://annon-thoughts.herokuapp.com/post-thought', {
                phrase: value
            }).then(res => {
                console.log(res.data.message);
                toast.success('Your thought is on its way! 🚀', {
                    position: "bottom-right",
                    theme: "dark",
                });
            }).catch(err => {
                console.log(err)
            });
        }
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="left"></div>
                    <div className="right">
                        <div className="content">
                            <h1>Anonymous Thoughts</h1>
                            <p>You can add you own idea or thought on the
                                following input and it will be added to the
                                list posts on the instagram profile. <br />
                            </p>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Share a thought"
                                multiline
                                maxRows={8}
                                value={value}
                                fullWidth={true}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <Button
                                variant="contained"
                                size='large'
                                color='secondary'
                                fullWidth={true}
                                onClick={handleSubmit}
                            >
                                Send your thought
                            </Button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>);
}

export default MainPage;