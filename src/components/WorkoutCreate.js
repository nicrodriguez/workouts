import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList, Image, Modal, Text, View} from 'react-native';
import { workoutChanged, dateChanged, liftChanged, workoutUpdate, workoutCreate } from "../actions";

import {Button, CardSection, CardSectionBottom, CardSectionTop, Input} from "./common";





class WorkoutCreate extends Component {

    state = {
        newLift: false,
        key: '',
        sets: '',
        reps: ''

    };

    liftList = [];

    componentWillMount() {

    }
    onWorkoutChanged(text) {
        this.props.workoutChanged(text);
    }

    onDateChanged(text) {
        this.props.dateChanged(text);
    }

    onLiftCreated({key, sets, reps }) {
        this.liftList.push({key, sets, reps });
        this.props.liftChanged(this.liftList);
        console.log(this.props.lifts);
    }

    onSavePress() {


        const { workout, date, lifts } = this.props;

        this.props.workoutCreate({ workout, date, lifts });
        console.log(this.props.lifts);
    }

    onConfirmPressed() {
        const { key, sets, reps } = this.state;
        this.onLiftCreated({ key, sets, reps });
        this.setState({
            newLift: false,
            key: '',
            sets: '',
            reps: ''
        });

    }

    renderNewLiftForm(visible) {


        return(
            <Modal
                visible={visible}
                transparent
                animationType='slide'
                onRequestClose={() => {}}
            >
                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    position: 'relative',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <CardSectionTop>
                        <Input
                            label="Lift"
                            placeholder="lift name"
                            value={this.state.key}
                            onChangeText={key => this.setState({ key })}
                        />
                    </CardSectionTop>

                    <CardSection>
                        <Input
                            label="Sets"
                            placeholder="# of sets"
                            value={this.state.sets}
                            onChangeText={sets => this.setState({ sets })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Reps"
                            placeholder="# of reps"
                            value={this.state.reps}
                            onChangeText={reps => this.setState({ reps })}
                        />
                    </CardSection>

                    <CardSectionBottom>
                        <View style={styles.buttonBar}>
                            <Button onPress={() => {this.setState({ newLift: false})}}>Cancel</Button>
                            <Button onPress={() => {this.onConfirmPressed()}}>Confirm</Button>
                        </View>
                    </CardSectionBottom>

                </View>
            </Modal>
        );
    }

    render() {
        const { workout, date, lifts } = this.props;
        return(
            <View style={{ flex: 1 }}>
                <CardSection>
                    <Input
                        label="Workout"
                        placeholder="workout name"
                        value={workout}
                        onChangeText={this.onWorkoutChanged.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Date"
                        placeholder="mm/dd/yyyy"
                        value={date}
                        onChangeText={this.onDateChanged.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <View style={styles.buttonBar}>
                        <Button onPress={() => {this.setState({ newLift: true })} }>Add Lift</Button>
                        <Button>Delete Lift</Button>
                    </View>
                </CardSection>


                <CardSection>
                    <FlatList
                        data={lifts}
                        renderItem={({item}) =>
                            <CardSection>
                                <Text style={[styles.textItem, { flex: 12}]}>{item.key}</Text>
                                <Text style={[styles.textItem, { flex: 4}]}>{item.sets}x{item.reps}</Text>
                                <Image style={{ flex: 1 }} source={require('../images/delete.png')} />
                            </CardSection>
                        }
                    />
                </CardSection>

                {this.renderNewLiftForm(this.state.newLift)}

                <View style={styles.bottomButton}>
                    <Button
                        onPress={this.onSavePress.bind(this)}
                    >Save Workout</Button>
                </View>
            </View>
        );
    }
}

const styles={
    buttonBar: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    textItem: {

        padding: 10,
        fontSize: 18,
        height: 44
    },
    listItem: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#4b5045',
        borderRadius: 5
    },
    bottomButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }

};

const mapStateToProps = (state) => {
    const { workout, date, lifts } = state.newWorkoutReducer;
    return { workout, date, lifts }
};

export default connect(mapStateToProps, { workoutChanged, dateChanged, liftChanged, workoutUpdate, workoutCreate })(WorkoutCreate);