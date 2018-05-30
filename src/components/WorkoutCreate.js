import React, { Component } from 'react';
import {ListView, Text, View} from 'react-native';
import { connect } from 'react-redux';

import {Button, Card, CardSection, Input} from "./common";
import LiftList from './LiftList';

var lifts=
    [
        {
            id: 0,
            name: 'Bench Press',
            sets: '4',
            reps: '10'
        },
        {
            id: 1,
            name: 'Incline DB Press',
            sets: '4',
            reps: '8'
        }
    ];



class WorkoutCreate extends Component {



    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Workout"
                        placeholder="workout name"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Date"
                        placeholder="mm/dd/yyyy"
                    />
                </CardSection>
                <CardSection>
                    {LiftList(lifts)}
                </CardSection>

                <CardSection>
                    <Button>Save Workout</Button>
                </CardSection>
            </Card>
        );
    }
}



export default connect()(WorkoutCreate);