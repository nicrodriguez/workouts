import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList, Modal, Text, View} from 'react-native';
import { workoutChanged, dateChanged, liftChanged, workoutUpdate, workoutCreate } from "../actions";

import {Button, CardSection, Input} from "./common";





class WorkoutCreate extends Component {

    state = {
        newLift: false,
        name: '',
        sets: '',
        reps: ''

    };

    renderNewLiftForm({ visible }) {


        return(
            <Modal
                visible={false}
                transparent
                animationType='slide'
                onRequestClose={() => {}}
            >
                <View>
                    <CardSection>
                        <Input
                            label="Lift"
                            placeholder="lift name"
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    </CardSection>

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

                    <CardSection>
                        <View style={styles.buttonBar}>
                            <Button onPress={() => {this.setState({ newLift: false})}}>Cancel</Button>
                            <Button>Confirm</Button>
                        </View>
                    </CardSection>

                </View>
            </Modal>
        );
    }

    componentWillMount() {
        const liftList=
            [
                {
                    id: 0,
                    key: 'Bench Press',
                    sets: '4',
                    reps: '10'
                },
                {
                    id: 1,
                    key: 'Incline DB Press',
                    sets: '4',
                    reps: '8'
                },
                {
                    id: 2,
                    key: 'DB Flys',
                    sets: '4',
                    reps: '10'
                },
                {
                    id: 3,
                    key: 'Close-Grip Bench Press',
                    sets: '4',
                    reps: '8'
                }
            ];
        this.onLiftChanged(liftList);
    }
    onWorkoutChanged(text) {
        this.props.workoutChanged(text);
    }

    onDateChanged(text) {
        this.props.dateChanged(text);
    }

    onLiftChanged(lift) {
        this.props.liftChanged(lift);
    }

    onSavePress() {


        const { workout, date, lifts } = this.props;

        this.props.workoutCreate({ workout, date, lifts });
        console.log(this.props.lifts);
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
                                <Text style={[styles.textItem, { flex: 3}]}>{item.key}</Text>
                                <Text style={[styles.textItem, { flex: 1}]}>{item.sets}x{item.reps}</Text>
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