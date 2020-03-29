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

import { PluginDTO } from '../model/pluginDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PluginResourceService {

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
     * getPlugin
     * 
     * @param className className
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPluginUsingGET(className: string, observe?: 'body', reportProgress?: boolean): Observable<PluginDTO>;
    public getPluginUsingGET(className: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PluginDTO>>;
    public getPluginUsingGET(className: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PluginDTO>>;
    public getPluginUsingGET(className: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (className === null || className === undefined) {
            throw new Error('Required parameter className was null or undefined when calling getPluginUsingGET.');
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

        return this.httpClient.get<PluginDTO>(`${this.basePath}/api/plugins/${encodeURIComponent(String(className))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPlugins
     * 
     * @param withoutDocumentation withoutDocumentation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPluginsUsingGET(withoutDocumentation?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<PluginDTO>>;
    public getPluginsUsingGET(withoutDocumentation?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PluginDTO>>>;
    public getPluginsUsingGET(withoutDocumentation?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PluginDTO>>>;
    public getPluginsUsingGET(withoutDocumentation?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (withoutDocumentation !== undefined && withoutDocumentation !== null) {
            queryParameters = queryParameters.set('withoutDocumentation', <any>withoutDocumentation);
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

        return this.httpClient.get<Array<PluginDTO>>(`${this.basePath}/api/plugins`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
