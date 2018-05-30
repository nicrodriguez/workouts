import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';


class WorkoutList extends Component {
    componentWillMount() {
        this.props.workoutsFetch();
        this.createDataSource(this.props);
    }

    createDataSource({ workouts}){
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(workouts);
    }
    render() {
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            >

            </ListView>
        );
    }
}

const mapStateToProps = state => {
  const workouts = _.map(state.workouts, (val, uid) => {
     return { ...val, uid };
  });
};
export default connect(mapStateToProps, { workoutsFetch })(WorkoutList);