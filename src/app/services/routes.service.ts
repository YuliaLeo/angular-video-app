import {Injectable} from '@angular/core'
import {AppRoutes} from '../types/AppRoutes'
import {IRouter} from "../types/Router";

export const toVideos = [`/${AppRoutes.Videos}`];

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  // Пустой  конструктор можно удалить
  constructor() {
  }

  // Твой вариант допустим. Но я бы реализовал это в качестве объекта ВНЕ сервиса,
  // Не придется тянуть RoutesService как зависимость (нестрашно, но всё же)
  // Геттеры в определенных случаях могут быть ресурсозатратнее чем простой объект + можно будет избавиться от интерфейса
  // Скинул пару скринов в feedback.md 1й пункт
  public get routes(): IRouter {
    return {
      videos: {
        id: (id: string) => [...toVideos, id]
      }
    }
  }
}
