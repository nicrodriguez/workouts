import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList, Text, View} from 'react-native';
import { workoutUpdate, workoutCreate } from "../actions";

import {Button, CardSection, Input} from "./common";






class WorkoutCreate extends Component {

    componentWillMount() {

    }
    onSavePress() {
        const lift=
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
        this.props.workoutUpdate({ prop: 'lifts', lift});
        const { workout, date, lifts } = this.props;
        this.props.workoutCreate({ workout, date, lifts });
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
                        onChangeText={value => this.props.workoutUpdate({ prop: 'workout', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Date"
                        placeholder="mm/dd/yyyy"
                        value={date}
                        onChangeText={value => this.props.workoutUpdate({ prop: 'date', value })}
                    />
                </CardSection>

                <CardSection>
                    <View style={styles.buttonBar}>
                        <Button>Add Lift</Button>
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


                <View style={styles.bottomButton}>
                    <Button
                        onPress={this.onSavePress()}
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

export default connect(mapStateToProps, {workoutUpdate, workoutCreate })(WorkoutCreate);