export type JiraStatisticsItem = [string, string, string, string, string, string];

export type JiraStatistics = JiraStatisticsItem[];

export interface Task {
    title: string;
    hours: number[];
}