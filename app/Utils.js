/**
 * Created by JohnTrump on 10/16/16.
 * Description:工具类,用来封装常用的函数方法
 *
 */
import React from 'react';
import {PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';

export default class Utils {
    static NODE_SERVER:'http://api.caogfw.cn:10017/api';
    static SCHOOL_SERVER: 'http://se.xmut.edu.cn';
    constructor() {

    }

    /**
     * 获取屏幕信息
     * @returns {{ratio: (*|number), pixel: number, size: {width, height}}}
     */
    static getScreenParam() {
        return {
            ratio: PixelRatio.get(),
            pixel: 1 / PixelRatio.get(),
            size: {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }
        }
    }

    /**
     * 对post方法的封装,底层为fetch方法
     * @param url
     * @param data
     * @param callback
     */
    static post(url, data, callback,errorCallback=()=>{}) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch('http://api.caogfw.cn:10017/api'+url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                callback(responseData);
            })
            .catch((error)=>{
                errorCallback(error);
                console.log('[Fetch Error' + error.message);
            });
    }

    /**
     * 对get方法的封装,底层是fetch方法
     */
    static get(url,callback,errorCallback=()=>{}){
        const fetchOptions = {
            method:'GET'
        };
        fetch('http://api.caogfw.cn:10017/api'+url, fetchOptions)
            .then((response) => {
                console.log('[FETCH Success]');
                return response.json();
            })
            .then((responseData) => {
                callback(responseData);
            })
            .catch((error)=>{
                errorCallback(error);
                console.log('[FETCH ERROR]'+error.message);
            });
    }
}