import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

const TimeAgo: React.FC<{ timestamp: string }> = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <span style={{ fontSize: '12px' }}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
