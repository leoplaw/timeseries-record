# timeseries-record [![Build Status](https://travis-ci.org/strong-roots-capital/timeseries-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/timeseries-record) [![npm version](https://img.shields.io/npm/v/timeseries-record.svg)](https://npmjs.org/package/timeseries-record) [![npm](https://img.shields.io/npm/dt/timeseries-record.svg)](https://www.npmjs.com/package/timeseries-record)

> Interface for time-series record data

## Install

``` shell
npm install timeseries-record
```

## Use

``` typescript
import Record from 'timeseries-record'
```

The `Record` interface is defined as

``` typescript
/**
 * An atomic unit of time-series data.
 *
 * For convenience, this is the same definition of Record as
 * implemented in package `talib-binding`.
 */
interface Record {
    /**
     * Time that the current Record began, in units of milliseconds
     * elapsed since January 1, 1970.
     */
    Time: number,
    /**
     * Opening value of current Record.
     */
    Open: number,
    /**
     * Highest value observed during current Record.
     */
    High: number,
    /**
     * Lowest value observed during current Record.
     */
    Low: number,
    /**
     * Closing value of current Record.
     */
    Close: number,
    /**
     * Volume observed in current Record.
     */
    Volume: number
}
```

## Related

- [talib-binding](https://github.com/acrazing/talib-binding-node)
- [random-record](https://github.com/strong-roots-capital/random-record)
