import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import endOfMonth from 'date-fns/endOfMonth'
import endOfWeek from 'date-fns/endOfWeek'
import format from 'date-fns/format'
import startOfMonth from 'date-fns/startOfMonth'
import startOfWeek from 'date-fns/startOfWeek'

type Props = {
  date: Date
  value?: Date
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const Calendar: React.VFC<Props> = ({
  date = new Date(),
  value,
  weekStartsOn = 0,
}) => {
  const weekIntervals = eachWeekOfInterval(
    {
      start: startOfMonth(date),
      end: endOfMonth(date),
    },
    { weekStartsOn }
  )

  const dayIntervals = weekIntervals.map(weekInterval =>
    eachDayOfInterval({
      start: startOfWeek(weekInterval, { weekStartsOn }),
      end: endOfWeek(weekInterval, { weekStartsOn }),
    })
  )

  const headerLabels = dayIntervals[0].map(day => format(day, 'iii'))

  console.log(value, dayIntervals)

  return (
    <Grid templateColumns="repeat(7, 1fr)">
      {/* Month Header */}
      {headerLabels.map(label => (
        <GridItem key={label}>{label}</GridItem>
      ))}

      {/* Day Cell */}
      {dayIntervals.map(days => (
        <>
          {days.map(day => (
            <GridItem key={day.toLocaleString()}>
              <Box
                bgColor={
                  value &&
                  format(value, 'yyyy/MM/dd') === format(day, 'yyyy/MM/dd')
                    ? 'blackAlpha.400'
                    : undefined
                }
              >
                {format(day, 'dd')}
              </Box>
            </GridItem>
          ))}
        </>
      ))}
    </Grid>
  )
}
