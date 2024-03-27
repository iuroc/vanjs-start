import { Response } from 'express'

export const sendRes = <T = any>(
    res: Response,
    success: boolean = true,
    message: string = '操作成功',
    data?: T,
) => {
    res.send({ success, message, data })
}

/** 获取数组随机一项 */
export const getRandItem = (array: any[]) => array[Math.floor(Math.random() * array.length)]