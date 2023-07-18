import {
  Logger,
  QueryRunner,
  AdvancedConsoleLogger,
  LoggerOptions,
} from 'typeorm';

export class MyCustomLogger extends AdvancedConsoleLogger implements Logger {
  constructor(options?: LoggerOptions) {
    super(options);
  }

  logQueryError(
    error: string | Error,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
  ) {
    if (error.toString().includes('unique_name_organizationName')) {
      //do nothing or log info/warning
    } else {
      super.logQueryError(error.toString(), query, parameters, queryRunner);
    }
  }
}
