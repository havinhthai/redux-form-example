import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

/****************** Case 3: *******************/
// import submit from '../submit';


/****************** Case 1: *******************/
// const validate = values => {
//     const errors = {};

//     if (!values.username) {
//         errors.username = 'Required';
//     } else if (values.username.length > 20) {
//         errors.username = 'Username mus be less than or equal 20 characters';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     }

//     return errors;
// }

// const warn = values => {
//     const warnings = {};

//     if (!values.age) {
//         warnings.age = 'You seem a bit young...';
//     }

//     return warnings;
// }

/****************** Case 2: *******************/
const required = value => value ? undefined : 'Required';
const maxLength15 = value => value && value.length > 15 ? 'Must be 15 chars' : undefined;
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const submit = (values) => {
    alert('Submit:' + JSON.stringify(values));
}

/****************** Case 4: *******************/
import validate from '../validate';
import asyncValidate from '../asyncValidate';


// asyncValidating is boolean
const renderField = ({ placeholder, label, keyboardType, 
    meta: { touched, error, warning, asyncValidating }, 
    input: { onChange, ...restInput }}) => {
        return (
            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: 80 }}>
                    {label}
                </Text>

                <TextInput 
                    style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 220, padding: 5 }}
                    keyboardType={keyboardType} onChangeText={onChange} placeholder={placeholder} {...restInput}
                />

                {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) || 
                    (warning && <Text style={{ color: 'yellow' }}>{warning}</Text>) ||
                    (asyncValidating && <Text style={{ color: 'orange' }}>Validating...</Text>)
                )}
            </View>
        );
}

const ContactComponent = props => {
    const { handleSubmit, submitting, reset } = props;

    // submitting is boolean (same isLoading)

    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>
                Redux-form example
            </Text>

            <Field 
                name="username" 
                keyboardType="default" 
                label="Username" 
                component={renderField}
                placeholder="Username"
                validate={[required, maxLength15]}
            />

            <Field 
                name="email" 
                keyboardType="email-address" 
                label="Email" 
                component={renderField}
                warn={[required]}
            />

            <Field name="age" keyboardType="numeric" label="Age" component={renderField} />
            
            <TouchableOpacity 
                onPress={handleSubmit(submit)} 
                style={{ margin: 10, alignItems: 'center' }}
                disabled={submitting}
            >
                <Text style={{
                    backgroundColor: 'steelblue', color: '#fff', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={reset}
                style={{ margin: 10, alignItems: 'center' }}
                disabled={submitting}
            >
                <Text style={{
                    backgroundColor: 'steelblue', color: '#fff', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

export default reduxForm({ 
    form: 'contact',
    /****************** Case 4: *******************/
    validate,
    asyncValidate,
    asyncBlurFields: ['username'] // Field's name applied
})(ContactComponent);
