
import { Point } from "components/Plot/Line";
import {
    FROM_WAITING_FOR_DEVELOPMENT_TO_IN_PROGRESS_COLOR,
    FROM_WAITING_FOR_DEVELOPMENT_TO_IN_PROGRESS,
    FROM_IN_PROGRESS_TO_IN_REVIEW,
    FROM_IN_PROGRESS_TO_IN_REVIEW_COLOR,
    FROM_IN_REVIEW_TO_READY_FOR_TESTING,
    FROM_IN_REVIEW_TO_READY_FOR_TESTING_COLOR,
    FROM_READY_FOR_TESTING_TO_IN_TESTING,
    FROM_READY_FOR_TESTING_TO_IN_TESTING_COLOR,
    FROM_IN_TESTING_TO_READY_TO_RELEASE,
    FROM_IN_TESTING_TO_READY_TO_RELEASE_COLOR,
} from "./constants";
// @ts-ignore
//TODO: fix warning in TS
import jiraStatistics from "../data/jira-statuses-statistics.csv"
import { JiraStatistics, JiraStatisticsItem, Task } from "./types";

export const getStatistics = () => {
    const statuses = jiraStatistics[0] as string[];
    const statistics = (jiraStatistics as JiraStatistics).reduce<Task[]>((acc, item, index) => {
        if (index === 0) {
            return acc;
        }

        const statisticsElem = convertStatisticsItem(item);
        acc.push(statisticsElem);

        return acc;
    }, [])

    return {
        statuses: statuses.slice(1),
        statistics
    };
}

export const convertStatisticsItem = (item: JiraStatisticsItem): Task => {
    const [title, ...rest] = item;
    const hours = rest.map((hour) => -Number(hour));

    return {
        title,
        hours
    }
}

export const getLineColor = (point1: Point, point2: Point) => {
    const sumOfY = point1.y + point2.y;
    let color = "";

    switch (sumOfY) {
        case FROM_WAITING_FOR_DEVELOPMENT_TO_IN_PROGRESS:
            color = FROM_WAITING_FOR_DEVELOPMENT_TO_IN_PROGRESS_COLOR;
            break;
        case FROM_IN_PROGRESS_TO_IN_REVIEW:
            color = FROM_IN_PROGRESS_TO_IN_REVIEW_COLOR;
            break;
        case FROM_IN_REVIEW_TO_READY_FOR_TESTING:
            color = FROM_IN_REVIEW_TO_READY_FOR_TESTING_COLOR;
            break;
        case FROM_READY_FOR_TESTING_TO_IN_TESTING:
            color = FROM_READY_FOR_TESTING_TO_IN_TESTING_COLOR;
            break;
        case FROM_IN_TESTING_TO_READY_TO_RELEASE:
            color = FROM_IN_TESTING_TO_READY_TO_RELEASE_COLOR;
            break;
    }

    return color;
}