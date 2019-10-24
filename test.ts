import test from 'ava'
import TimeseriesRecord from './src/timeseries-record'

test('record is importable', t => {
    t.pass()
})

test('Record is of expected form', t => {
    function returnRecord(): TimeseriesRecord {
        return {
            Time: 1,
            Open: 2,
            High: 3,
            Low: 4,
            Close: 5,
            Volume: 6
        }
    }
    const record: TimeseriesRecord = returnRecord()
    t.pass()
})
