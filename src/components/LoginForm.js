import React, { Component } from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, ButtonBottom, Spinner, CardSectionTop, CardSectionBottom } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <ButtonBottom onPress={this.onButtonPress.bind(this)}>
                Login
            </ButtonBottom>
        );
    }

    render() {
        return (
            <ImageBackground source={require('../images/login_pic.png')} style={styles.formContainerStyle}>

                    <Card>
                        <CardSectionTop>
                            <Input
                                label="Email"
                                placeholder="email@gmail.com"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                            />
                        </CardSectionTop>
                        <CardSection>
                            <Input
                                secureTextEntry
                                label="Password"
                                placeholder="password"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                            />
                        </CardSection>
                        {this.renderError()}
                        <CardSectionBottom>
                            {this.renderButton()}
                        </CardSectionBottom>
                    </Card>
            </ImageBackground>
        );

    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    formContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);
