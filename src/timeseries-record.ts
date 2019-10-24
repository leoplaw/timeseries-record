/**
 * timeseries-record
 * Interface for time-series record data
 */

/**
 * An atomic unit of time-series data.
 *
 * For convenience, this is the same definition of Record as
 * implemented in package `talib-binding`.
 */
interface TimeseriesRecord {
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

export default TimeseriesRecord
