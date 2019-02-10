export * from './contingencyTable.service';
import { ContingencyTableService } from './contingencyTable.service';
export * from './proportionalReportingRatio.service';
import { ProportionalReportingRatioService } from './proportionalReportingRatio.service';
export * from './reportingOddsRatio.service';
import { ReportingOddsRatioService } from './reportingOddsRatio.service';
export const APIS = [ContingencyTableService, ProportionalReportingRatioService, ReportingOddsRatioService];
