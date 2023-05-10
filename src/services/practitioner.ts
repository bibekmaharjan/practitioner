import axios from 'axios';
import config from 'src/config';
import { interpolate } from 'src/utils/interpolate';
import RequestConfig from 'src/domain/misc/RequestConfig';
import PractitionerPayload from 'src/domain/requests/PractitionerPayload';
import PractitionerResponse from 'src/domain/responses/PractitionerResponse';
import UserDetailResponse from 'src/domain/responses/UserDetailResponse';

/**
 * Fetch details for practitioner.
 *
 * @returns {Promise<UserDetailResponse>}
 */
export async function fetchPractitionerDetails(
  id: string | undefined,
  reqConfig: RequestConfig
): Promise<UserDetailResponse> {
  const url = interpolate(config.endpoints.practitionerDetails, { id });

  return await axios.get(url, reqConfig);
}

/**
 * Fetch practitioner list.
 *
 * @returns {Promise<PractitionerResponse>}
 */
export async function fetchPractitioners(reqConfig: RequestConfig): Promise<PractitionerResponse> {
  return await axios.get(config.endpoints.practitioners, reqConfig);
}

/**
 * Delete practitioner list.
 *
 */
export async function deletePractitioner(id: number, reqConfig: RequestConfig) {
  const url = interpolate(config.endpoints.deletePractitioners, { id });

  return await axios.delete(url, reqConfig);
}

/**
 * Add practitioner to list.
 *
 */
export async function addPractitioner(practitionerData: PractitionerPayload, reqConfig: RequestConfig) {
  return await axios.post(config.endpoints.practitioners, practitionerData, reqConfig);
}

/**
 * Edit practitioner to list.
 *
 */
export async function editPractitioner(practitionerData: PractitionerPayload, id: number, reqConfig: RequestConfig) {
  const url = interpolate(config.endpoints.editPractitioners, { id });

  return await axios.put(url, practitionerData, reqConfig);
}
