/**
 * AEOLUsrs API
 * Documentation of the A curated and standardized adverse drug event resource to accelerate drug safety research (AEOLUS) web query services. Learn more about the underlying dataset [HERE](https://www.nature.com/articles/sdata201626)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jmbanda@stanford.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { ModelObject } from '../model/modelObject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReportingOddsRatioService {

    protected basePath = 'http://ec2-54-186-230-27.us-west-2.compute.amazonaws.com:8080/{basePath}';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Uses drug and outcome codes in RxNorm and SNOMEDCT respectively to search AEOLUS and return the ROR, 95% confidence intervals and case count.
     * Returns the Reporting Odds Ratio (ROR) for the drug/outcome coded query as well as the lower and upper 95% confidence intervals and the case count.Calculations are made following [Gavali, D. K., Kulkarni, K. S., Kumar, A. &amp; Chakraborty, B. S. Therapeutic class-specific signal detection of bradycardia associated with propranolol hydrochloride. Indian Journal of Pharmacology 41, 162–166 (2009).](http://www.ijp-online.com/text.asp?2009/41/4/162/56068)
     * @param drugCode RxNorm drug code for search
     * @param outcomeCode SNOMEDCT outcome code for search
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public rorCodes(drugCode: string, outcomeCode: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ModelObject>>;
    public rorCodes(drugCode: string, outcomeCode: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModelObject>>>;
    public rorCodes(drugCode: string, outcomeCode: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModelObject>>>;
    public rorCodes(drugCode: string, outcomeCode: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (drugCode === null || drugCode === undefined) {
            throw new Error('Required parameter drugCode was null or undefined when calling rorCodes.');
        }
        if (outcomeCode === null || outcomeCode === undefined) {
            throw new Error('Required parameter outcomeCode was null or undefined when calling rorCodes.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (drugCode !== undefined && drugCode !== null) {
            queryParameters = queryParameters.set('drugCode', <any>drugCode);
        }
        if (outcomeCode !== undefined && outcomeCode !== null) {
            queryParameters = queryParameters.set('outcomeCode', <any>outcomeCode);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/RORCodes`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Uses drug and outcome names in RxNorm and SNOMEDCT respectively to search AEOLUS and return the ROR, 95% confidence intervals and case count.
     * Returns the Reporting Odds Ratio (ROR) for the drug/outcome named query as well as the lower and upper 95% confidence intervals and the case count.Calculations are made following [Gavali, D. K., Kulkarni, K. S., Kumar, A. &amp; Chakraborty, B. S. Therapeutic class-specific signal detection of bradycardia associated with propranolol hydrochloride. Indian Journal of Pharmacology 41, 162–166 (2009).](http://www.ijp-online.com/text.asp?2009/41/4/162/56068)
     * @param drugName RxNorm drug name for search
     * @param outcomeName SNOMEDCT outcome name for search
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public rorNames(drugName: string, outcomeName: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ModelObject>>;
    public rorNames(drugName: string, outcomeName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModelObject>>>;
    public rorNames(drugName: string, outcomeName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModelObject>>>;
    public rorNames(drugName: string, outcomeName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (drugName === null || drugName === undefined) {
            throw new Error('Required parameter drugName was null or undefined when calling rorNames.');
        }
        if (outcomeName === null || outcomeName === undefined) {
            throw new Error('Required parameter outcomeName was null or undefined when calling rorNames.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (drugName !== undefined && drugName !== null) {
            queryParameters = queryParameters.set('drugName', <any>drugName);
        }
        if (outcomeName !== undefined && outcomeName !== null) {
            queryParameters = queryParameters.set('outcomeName', <any>outcomeName);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/RORNames`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

