import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ActivityCard from './ActivityCard'
import Calendar from './Calendar'
import Records from './Records'
import Statistics from './Statistics'
import UserStatistics from './UserStatistics'
import { getOrUpdateData } from '../../actions'
import { getMoreActivities } from '../../actions/activities'

class DashBoard extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      page: 1,
    }
  }

  componentDidMount() {
    this.props.loadActivities()
  }

  render() {
    const {
      activities,
      loadMoreActivities,
      message,
      records,
      sports,
      user,
    } = this.props
    const paginationEnd =
      activities.length > 0
        ? activities[activities.length - 1].previous_activity === null
        : true
    const { page } = this.state
    return (
      <div>
        <Helmet>
          <title>FitTrackee - Dashboard</title>
        </Helmet>
        {message ? (
          <code>{message}</code>
        ) : (
          activities &&
          sports.length > 0 && (
            <div className="container dashboard">
              <UserStatistics user={user} />
              <div className="row">
                <div className="col-md-4">
                  <Statistics />
                  <Records records={records} sports={sports} user={user} />
                </div>
                <div className="col-md-8">
                  <Calendar weekm={user.weekm} />
                  {activities.length > 0 ? (
                    activities.map(activity => (
                      <ActivityCard
                        activity={activity}
                        key={activity.id}
                        sports={sports}
                        user={user}
                      />
                    ))
                  ) : (
                    <div className="card text-center">
                      <div className="card-body">
                        No workouts.{' '}
                        <Link to={{ pathname: '/activities/add' }}>
                          Upload one !
                        </Link>
                      </div>
                    </div>
                  )}
                  {!paginationEnd && (
                    <input
                      type="submit"
                      className="btn btn-default btn-md btn-block"
                      value="Load more activities"
                      onClick={() => {
                        loadMoreActivities(page + 1)
                        this.setState({ page: page + 1 })
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    activities: state.activities.data,
    message: state.message,
    records: state.records.data,
    sports: state.sports.data,
    user: state.user,
  }),
  dispatch => ({
    loadActivities: () => {
      dispatch(getOrUpdateData('getData', 'activities', { page: 1 }))
      dispatch(getOrUpdateData('getData', 'records'))
    },
    loadMoreActivities: page => {
      dispatch(getMoreActivities({ page }))
    },
  })
)(DashBoard)
