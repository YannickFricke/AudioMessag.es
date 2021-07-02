import { intervalToDuration } from 'date-fns';

/**
 * Formats the duration between the current timestamp from the media to the ending timestamp of the media
 *
 * @param {number} [currentTime=0] The current time position of the media element
 * @param {number} [duration=0] The duration of the media element
 * @return {string} The formatted duration
 */
export const formatDuration = (
    currentTime: number = 0,
    duration: number = 0,
): string => {
    const timestamp = Date.now();

    const computedDuration = intervalToDuration({
        start: timestamp + currentTime * 1000,
        end: timestamp + duration * 1000,
    });

    const result = [];

    if (computedDuration.years ?? 0 > 0) {
        result.push(
            `${computedDuration.years} ${
                computedDuration.years === 1 ? 'year' : 'years'
            }`,
        );
    }

    if (computedDuration.months ?? 0 > 0) {
        result.push(
            `${computedDuration.months} ${
                computedDuration.months === 1 ? 'month' : 'months'
            }`,
        );
    }

    if (computedDuration.days ?? 0 > 0) {
        result.push(
            `${computedDuration.days} ${
                computedDuration.days === 1 ? 'day' : 'days'
            }`,
        );
    }

    if (computedDuration.minutes ?? 0 > 0) {
        result.push(
            `${computedDuration.minutes} ${
                computedDuration.minutes === 1 ? 'minute' : 'minutes'
            }`,
        );
    }

    result.push(
        `${computedDuration.seconds ?? 0} ${
            (computedDuration.seconds ?? 0) === 1 ? 'second' : 'seconds'
        }`,
    );

    return result.join(' ');
};
