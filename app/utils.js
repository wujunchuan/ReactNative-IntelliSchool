/**
 * Created by JohnTrump on 10/16/16.
 * Description:工具类,用来封装常用的函数方法
 *
 */
import React from 'react';
import {PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';

export default class Utils {
    constructor() {}

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
    static post(url, data, callback) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                callback(responseData);
            })
    }
}