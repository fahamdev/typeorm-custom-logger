import AlreadyAssignedTestCenterNameException from './already-assignedtest-center-name-exception';

type RepositoryException = Error & { detail: string; constraint?: string };

export default class RepositoryExceptionHandler {
  static handleTestCenterError(error: RepositoryException): void {
    if (error.constraint === 'unique_name_organizationName') {
      throw new AlreadyAssignedTestCenterNameException();
    }
  }
}
