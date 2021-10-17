import React from 'react';
import PageHeader from "./common/pageHeader";
import Form from './common/form';
import Joi from "joi";
import usersService from '../services/usersService';
import { Redirect } from 'react-router-dom';
import cardsService from '../services/cardsService';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


class EditCard extends Form {
    state = {
        form: {
            bizName: "",
            bizDescription: "",
            bizAddress: "",
            bizPhone: "",
            bizImage: "",
        },
        errors: {},
    };

    schema = {
        _id: Joi.string(),
        bizName: Joi.string().min(2).max(255).required().label("Name"),
        bizDescription: Joi.string().min(2).max(1024).required().label("Description"),
        bizAddress: Joi.string().min(2).max(400).required().label("Address"),
        bizPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/).label("Phone"),
        bizImage: Joi.string().min(11).max(1024).uri().label("Image").allow(""),
    };

    async componentDidMount() {
        const id = this.props.match.params.id;

        const {
            data: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
        } = await cardsService.getCard(id);

        this.setState({
            form: {
                _id,
                bizName,
                bizDescription,
                bizAddress,
                bizImage,
                bizPhone,
            },
        });
    }


    async doSubmit() {
        const { form: card } = this.state;
        await cardsService.editCard(card);
        toast("Card is updated successfully!");
        this.props.history.replace("/my-cards");
    }



    render() {
        if (!usersService.getCurrentUser()) {
            return <Redirect to="/signin" />;
        }
        return (
            <>
                <PageHeader title="Create a new Business Card"></PageHeader>
                <div className="row">
                    <div className="col-12">
                        <p>
                            Edit Card!
                        </p>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
                    {this.renderInput("bizName", "Name", "text", true)}
                    {this.renderInput("bizDescription", "Description", "text", true)}
                    {this.renderInput("bizAddress", "Address", "text", true)}
                    {this.renderInput("bizPhone", "Phone", "text", true)}
                    {this.renderInput("bizImage", "Image")}
                    <div className="mt-2">
                        <Link to=".." className="me-3 btn btn-secondary">Cancel</Link>
                        {this.renderButton("Save")}</div>
                </form>
            </>
        );
    }
}

export default EditCard;