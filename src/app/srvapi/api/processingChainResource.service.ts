/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
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

import { ProcessingChainDTO } from '../model/processingChainDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProcessingChainResourceService {

    protected basePath = 'https://localhost:8100';
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
     * createProcessingChain
     * 
     * @param processingChainDTO processingChainDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createProcessingChainUsingPOST(processingChainDTO: ProcessingChainDTO, observe?: 'body', reportProgress?: boolean): Observable<ProcessingChainDTO>;
    public createProcessingChainUsingPOST(processingChainDTO: ProcessingChainDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProcessingChainDTO>>;
    public createProcessingChainUsingPOST(processingChainDTO: ProcessingChainDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProcessingChainDTO>>;
    public createProcessingChainUsingPOST(processingChainDTO: ProcessingChainDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processingChainDTO === null || processingChainDTO === undefined) {
            throw new Error('Required parameter processingChainDTO was null or undefined when calling createProcessingChainUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ProcessingChainDTO>(`${this.basePath}/api/processing-chains`,
            processingChainDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProcessingChainSteps
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingChainStepsUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ProcessingChainDTO>>;
    public getProcessingChainStepsUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ProcessingChainDTO>>>;
    public getProcessingChainStepsUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ProcessingChainDTO>>>;
    public getProcessingChainStepsUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProcessingChainStepsUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ProcessingChainDTO>>(`${this.basePath}/api/processing-chains/${encodeURIComponent(String(id))}/steps`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProcessingChain
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingChainUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<ProcessingChainDTO>;
    public getProcessingChainUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProcessingChainDTO>>;
    public getProcessingChainUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProcessingChainDTO>>;
    public getProcessingChainUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProcessingChainUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ProcessingChainDTO>(`${this.basePath}/api/processing-chains/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProcessingChains
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingChainsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<ProcessingChainDTO>>;
    public getProcessingChainsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ProcessingChainDTO>>>;
    public getProcessingChainsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ProcessingChainDTO>>>;
    public getProcessingChainsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ProcessingChainDTO>>(`${this.basePath}/api/processing-chains`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateProcessingChain
     * 
     * @param processingChainDTO processingChainDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateProcessingChainUsingPUT(processingChainDTO: ProcessingChainDTO, observe?: 'body', reportProgress?: boolean): Observable<ProcessingChainDTO>;
    public updateProcessingChainUsingPUT(processingChainDTO: ProcessingChainDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProcessingChainDTO>>;
    public updateProcessingChainUsingPUT(processingChainDTO: ProcessingChainDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProcessingChainDTO>>;
    public updateProcessingChainUsingPUT(processingChainDTO: ProcessingChainDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processingChainDTO === null || processingChainDTO === undefined) {
            throw new Error('Required parameter processingChainDTO was null or undefined when calling updateProcessingChainUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<ProcessingChainDTO>(`${this.basePath}/api/processing-chains`,
            processingChainDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
