import React from 'react';
import PageHeader from "./common/pageHeader";
import Form from './common/form';
import Joi from "joi";
import { createUser } from '../services/usersService';
import { toast } from 'react-toastify';
import usersService from '../services/usersService';
import { Redirect } from 'react-router-dom';


class SignupBiz extends Form {
    state = {
        form: {
            email: "",
            password: "",
            name: "",
        },
        errors: {},
    };

    schema = {
        email: Joi.string().required().email({
            tlds: { allow: false },
        }),
        password: Joi.string().required().min(6),
        name: Joi.string().required().min(2),
    };

    async doSubmit() {
        const { form } = this.state;
        const body = { ...form, biz: true };
        try {
            await createUser(body);
            toast.info('🦄 A new account is open 👀', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            await usersService.login(body.email, body.password);

            window.location = "/create-card";
        }
        catch ({ response }) {
            if (response && response.status === 400) {
                this.setState({ errors: { email: response.data } });
            }
        }

    }

    render() {
        if (usersService.getCurrentUser()) {
            return <Redirect to="/" />;
        }
        return (
            <>
                <PageHeader title="Signup As Business for Real App"></PageHeader>
                <div className="row">
                    <div className="col-12">
                        <p>
                            Have a new account, it's free!
                        </p>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    <div className="mt-2">{this.renderButton("Sign Up")}</div>
                </form>
            </>
        );
    }
}

export default SignupBiz;