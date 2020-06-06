### Practice Overview

Создадим приложение для трекинга ситуации с COVID-19 по выбранной стране.

### Пример готового приложения

https://aabrosymov.github.io/

### API

`GET - https://api.covid19api.com/summary`

### Критерии выполнения

1. В вашем приложении должна быть таблица с данными по стране и поле для поиска.

2. Ожидаю увидеть HOC - `withCovidData`, который вы будете использовать для фетчинга данных и пробрасывания этих данных в дочерний компонент.

```jsx
const withCovidData = WrappedComponent => class extends React.Component {
  ...
  render() {
    return (
      <WrappedComponent {...this.props} data={data} isLoading={isLoading} hasError={hasError}>
    )
  }
}
```

3. Ожидаю правильное использование (и к месту) классовых и функциональных компонентов.

4. Правильная структура приложения.