import Joi from 'joi';
import React, { Component } from 'react';
import Input from './input';



class Form extends Component {

    validateInput = ({ name, value }) => {
        //aquire data:
        const data = {
            [name]: value,
        };
        const schema = Joi.object({
            [name]: this.schema[name],
        });

        //validate by data:
        const { error } = schema.validate(data);
        return error ? error.details[0].message : null;
    };


    validateForm = () => {
        //aquire data:
        const {
            schema,
            state: { form },
        } = this;
        // const schema = this.schema;
        // const form = this.state.form;

        // let ce = Joi.object(schema).validate(form, {
        //     abortEarly: false,
        // });
        // console.log(ce);

        //validate by data:
        const { error } = Joi.object(schema).validate(form, {
            abortEarly: false,
        });

        //return null if there are no errors:
        if (!error) {
            return null;
        }

        //re-arrange validation data:
        const errors = {}
        for (const detail of error.details) {
            errors[detail.path[0]] = detail.message;
        }

        //return arranged details:
        return errors;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validateForm();
        this.setState({ errors });

        if (errors) {
            return;
        }

        this.doSubmit();
    };

    resetForm() {
        const { form } = this.state;
        const updatedForm = {};
        for (const key in form) {
            updatedForm[key] = "";
        }
        this.setState({ form: updatedForm });
    }


    handleChange = ({ target }) => {
        const { form, errors } = this.state;

        //console.log(this.validateForm());
        //this.validateForm()
        // let { target } = e;
        // if (target.name === "email") {
        //     target.value = target.value.toLowerCase();
        // }
        this.setState({
            form: {
                ...form,
                [target.name]: target.value,
            },
            errors: {
                ...errors,
                [target.name]: this.validateInput(target),
            },
        });
    };


    renderInput(name, label, type = "text", required = false) {
        const { form, errors } = this.state;
        return (
            <Input
                type={type}
                name={name}
                label={label}
                onChange={this.handleChange}
                value={form[name]}
                error={errors?.[name]}
                required={required}
            />
        );
    }

    renderButton(label) {
        return <button disabled={this.validateForm()} className="btn btn-primary">
            {label}
        </button>
    }
}

export default Form;