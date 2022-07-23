import { assert, expect } from 'chai'

import { translatedSports } from './fixtures'

import { formatRecord, getRecordsBySports } from '@/utils/records'

describe('formatRecord', () => {
  const testsParams = [
    {
      description: "return formatted record for 'Average speed'",
      inputParams: {
        record: {
          id: 9,
          record_type: 'AS',
          sport_id: 1,
          user: 'admin',
          value: 18,
          workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 9,
        record_type: 'AS',
        value: '18 km/h',
        workout_date: '2019/07/07',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Farest distance'",
      inputParams: {
        record: {
          id: 10,
          record_type: 'FD',
          sport_id: 1,
          user: 'admin',
          value: 18,
          workout_date: 'Sun, 07 Jul 2019 22:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 10,
        record_type: 'FD',
        value: '18 km',
        workout_date: '2019/07/08',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Longest duration'",
      inputParams: {
        record: {
          id: 11,
          record_type: 'LD',
          sport_id: 1,
          user: 'admin',
          value: '1:01:00',
          workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 11,
        record_type: 'LD',
        value: '1:01:00',
        workout_date: '2019/07/07',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Max. speed'",
      inputParams: {
        record: {
          id: 12,
          record_type: 'MS',
          sport_id: 1,
          user: 'admin',
          value: 18,
          workout_date: 'Sun, 07 Jul 2019 22:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 12,
        record_type: 'MS',
        value: '18 km/h',
        workout_date: '2019/07/08',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Highest ascent'",
      inputParams: {
        record: {
          id: 13,
          record_type: 'HA',
          sport_id: 1,
          user: 'admin',
          value: 100,
          workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 13,
        record_type: 'HA',
        value: '100 m',
        workout_date: '2019/07/07',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
  ]
  testsParams.map((testParams) => {
    it(testParams.description, () => {
      assert.deepEqual(
        formatRecord(
          testParams.inputParams.record,
          testParams.inputParams.timezone,
          false
        ),
        testParams.expected
      )
    })
  })
})

describe('formatRecord after conversion', () => {
  const testsParams = [
    {
      description: "return formatted record for 'Average speed'",
      inputParams: {
        record: {
          id: 9,
          record_type: 'AS',
          sport_id: 1,
          user: 'admin',
          value: 18,
          workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 9,
        record_type: 'AS',
        value: '11.18 mi/h',
        workout_date: '2019/07/07',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Farest distance'",
      inputParams: {
        record: {
          id: 10,
          record_type: 'FD',
          sport_id: 1,
          user: 'admin',
          value: 18,
          workout_date: 'Sun, 07 Jul 2019 22:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 10,
        record_type: 'FD',
        value: '11.185 mi',
        workout_date: '2019/07/08',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Longest duration'",
      inputParams: {
        record: {
          id: 11,
          record_type: 'LD',
          sport_id: 1,
          user: 'admin',
          value: '1:01:00',
          workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 11,
        record_type: 'LD',
        value: '1:01:00',
        workout_date: '2019/07/07',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Max. speed'",
      inputParams: {
        record: {
          id: 12,
          record_type: 'MS',
          sport_id: 1,
          user: 'admin',
          value: 18,
          workout_date: 'Sun, 07 Jul 2019 22:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 12,
        record_type: 'MS',
        value: '11.18 mi/h',
        workout_date: '2019/07/08',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
    {
      description: "return formatted record for 'Highest ascent'",
      inputParams: {
        record: {
          id: 13,
          record_type: 'HA',
          sport_id: 1,
          user: 'admin',
          value: 100,
          workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        timezone: 'Europe/Paris',
      },
      expected: {
        id: 13,
        record_type: 'HA',
        value: '328.08 ft',
        workout_date: '2019/07/07',
        workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
      },
    },
  ]
  testsParams.map((testParams) => {
    it(testParams.description, () => {
      assert.deepEqual(
        formatRecord(
          testParams.inputParams.record,
          testParams.inputParams.timezone,
          true
        ),
        testParams.expected
      )
    })
  })
})

describe('formatRecord (invalid record type)', () => {
  it('it throws an error if record type is invalid', () => {
    expect(() =>
      formatRecord(
        {
          id: 12,
          record_type: 'M',
          sport_id: 1,
          user: 'admin',
          value: 18,
          workout_date: 'Sun, 07 Jul 2019 22:00:00 GMT',
          workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
        },
        'Europe/Paris',
        false
      )
    ).to.throw(
      'Invalid record type, expected: "AS", "FD", "HA", "LD", "MD", got: "M"'
    )
  })
})

describe('getRecordsBySports', () => {
  const testsParams = [
    {
      description: 'returns empty object if no records',
      input: {
        records: [],
        tz: 'Europe/Paris',
      },
      expected: {},
    },
    {
      description: 'returns record grouped by Sport',
      input: {
        records: [
          {
            id: 9,
            record_type: 'AS',
            sport_id: 1,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
        ],
        tz: 'Europe/Paris',
      },
      expected: {
        'Cycling (Sport)': {
          color: null,
          label: 'Cycling (Sport)',
          records: [
            {
              id: 9,
              record_type: 'AS',
              value: '18 km/h',
              workout_date: '2019/07/07',
              workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
            },
          ],
        },
      },
    },
    {
      description: 'returns record grouped by Sport',
      input: {
        records: [
          {
            id: 9,
            record_type: 'AS',
            sport_id: 1,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
          {
            id: 10,
            record_type: 'FD',
            sport_id: 2,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 22:00:00 GMT',
            workout_id: 'n6JcLPQt3QtZWFfiSnYm4C',
          },
          {
            id: 12,
            record_type: 'MS',
            sport_id: 1,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
        ],
        tz: 'Europe/Paris',
      },
      expected: {
        'Cycling (Sport)': {
          color: null,
          label: 'Cycling (Sport)',
          records: [
            {
              id: 9,
              record_type: 'AS',
              value: '18 km/h',
              workout_date: '2019/07/07',
              workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
            },
            {
              id: 12,
              record_type: 'MS',
              value: '18 km/h',
              workout_date: '2019/07/07',
              workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
            },
          ],
        },
        'Cycling (Transport)': {
          color: '#000000',
          label: 'Cycling (Transport)',
          records: [
            {
              id: 10,
              record_type: 'FD',
              value: '18 km',
              workout_date: '2019/07/08',
              workout_id: 'n6JcLPQt3QtZWFfiSnYm4C',
            },
          ],
        },
      },
    },
  ]
  testsParams.map((testParams) =>
    it(testParams.description, () => {
      assert.deepEqual(
        getRecordsBySports(
          testParams.input.records,
          translatedSports,
          testParams.input.tz,
          false,
          true
        ),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        testParams.expected
      )
    })
  )
})

describe('getRecordsBySports after conversion', () => {
  const testsParams = [
    {
      description: 'returns empty object if no records',
      input: {
        records: [],
        tz: 'Europe/Paris',
      },
      expected: {},
    },
    {
      description: 'returns record grouped by Sport',
      input: {
        records: [
          {
            id: 9,
            record_type: 'AS',
            sport_id: 1,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
        ],
        tz: 'Europe/Paris',
      },
      expected: {
        'Cycling (Sport)': {
          color: null,
          label: 'Cycling (Sport)',
          records: [
            {
              id: 9,
              record_type: 'AS',
              value: '11.18 mi/h',
              workout_date: '2019/07/07',
              workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
            },
          ],
        },
      },
    },
    {
      description: 'returns record grouped by Sport',
      input: {
        records: [
          {
            id: 9,
            record_type: 'AS',
            sport_id: 1,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
          {
            id: 10,
            record_type: 'FD',
            sport_id: 2,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 22:00:00 GMT',
            workout_id: 'n6JcLPQt3QtZWFfiSnYm4C',
          },
          {
            id: 12,
            record_type: 'MS',
            sport_id: 1,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
        ],
        tz: 'Europe/Paris',
      },
      expected: {
        'Cycling (Sport)': {
          color: null,
          label: 'Cycling (Sport)',
          records: [
            {
              id: 9,
              record_type: 'AS',
              value: '11.18 mi/h',
              workout_date: '2019/07/07',
              workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
            },
            {
              id: 12,
              record_type: 'MS',
              value: '11.18 mi/h',
              workout_date: '2019/07/07',
              workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
            },
          ],
        },
        'Cycling (Transport)': {
          color: '#000000',
          label: 'Cycling (Transport)',
          records: [
            {
              id: 10,
              record_type: 'FD',
              value: '11.185 mi',
              workout_date: '2019/07/08',
              workout_id: 'n6JcLPQt3QtZWFfiSnYm4C',
            },
          ],
        },
      },
    },
  ]
  testsParams.map((testParams) =>
    it(testParams.description, () => {
      assert.deepEqual(
        getRecordsBySports(
          testParams.input.records,
          translatedSports,
          testParams.input.tz,
          true,
          true
        ),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        testParams.expected
      )
    })
  )
})

describe('getRecordsBySports with HA record', () => {
  const testsParams = [
    {
      description: 'returns empty object if no records',
      input: {
        records: [],
        tz: 'Europe/Paris',
      },
      expected: {},
    },
    {
      description: 'returns records except HA record',
      input: {
        records: [
          {
            id: 9,
            record_type: 'AS',
            sport_id: 1,
            user: 'admin',
            value: 18,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
          {
            id: 9,
            record_type: 'HA',
            sport_id: 1,
            user: 'admin',
            value: 235,
            workout_date: 'Sun, 07 Jul 2019 08:00:00 GMT',
            workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
          },
        ],
        tz: 'Europe/Paris',
      },
      expected: {
        'Cycling (Sport)': {
          color: null,
          label: 'Cycling (Sport)',
          records: [
            {
              id: 9,
              record_type: 'AS',
              value: '18 km/h',
              workout_date: '2019/07/07',
              workout_id: 'hvYBqYBRa7wwXpaStWR4V2',
            },
          ],
        },
      },
    },
  ]
  testsParams.map((testParams) =>
    it(testParams.description, () => {
      assert.deepEqual(
        getRecordsBySports(
          testParams.input.records,
          translatedSports,
          testParams.input.tz,
          false,
          false
        ),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        testParams.expected
      )
    })
  )
})
