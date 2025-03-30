# Crypto Monitor

**Crypto Monitor**  jest narzędziem umożliwiającym użytkownikom śledzenie
najnowszych cen kryptowalut. Korzystając z API CoinGecko, aplikacja wyświetla aktualne ceny,
zmiany w ciągu ostatnich 24 godzin oraz kapitalizację dla różnych kryptowalut. Użytkownicy mogą
wyszukiwać konkretne kryptowaluty i zapoznać się z ich szczegółowymi informacjami. Aplikacja
także integruje się z API NewsAPI, pozwalając na dostęp do najnowszych wiadomości ze świata
kryptowalut. Zabezpieczenia aplikacji oparte są na JWT do uwierzytelniania i autoryzacji, a także
zawiera dokumentację Swagger oraz testy jednostkowe.

## Funkcjonalności

- **Śledzenie cen kryptowalut**: Pobieranie aktualnych cen, zmiany w ciągu ostatnich 24 godzin, oraz market cap.
- **Wyszukiwanie kryptowalut**: Możliwość wyszukiwania kryptowalut po nazwie lub symbolu.
- **Wyświetlanie szczegółów kryptowaluty**: Informacje o wybranej kryptowalucie, takie jak cena, zmiana 24h, market cap.
- **Śledzenie wiadomości**: Dostęp do najnowszych wiadomości ze świata kryptowalut.
- **Bezpieczeństwo**: Uwierzytelnianie za pomocą JWT, zapewniające dostęp tylko do autoryzowanych użytkowników.
- **Swagger**: Dokumentacja API dostępna w formie interaktywnej, umożliwiająca testowanie endpointów.
- **Testy jednostkowe**: Testy pokrywające funkcjonalność aplikacji i zapewniające jej poprawność.

## Technologie

- **Backend:**
  - API: [CoinGecko API](https://www.coingecko.com/en/api), [NewsAPI](https://newsapi.org/)
  - Uwierzytelnianie: JWT (JSON Web Token)
  - MongoDB
  - Node.js + Express.js (Javascript)
  
- **Frontend:**
  - [React](https://reactjs.org/) + Vite
  
- **Dokumentacja API:**
  - Swagger
  
- **Testowanie:**
  - [Jest](https://jestjs.io/) 
  
## Instalacja

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/ethic8L/crypto-monitor.git
   ```

2. Wejdź do katalogu projektu:
   
  ```bash
  cd crypto-monitor
  ```

3. Zainstaluj zależności:

  ```bash
  npm install
  ```

4. Uruchom aplikację: (Frontend)

  ```bash
  npm run dev 
  ```

5. Uruchom aplikację: (Backend)

  ```bash
  node app.js (katalog src, część backendowa) 
  ```

## Używanie aplikacji


- **Śledzenie cen kryptowalut**:  Po uruchomieniu aplikacji, zobaczysz listę kryptowalut z aktualnymi cenami i informacjami.
- **Wyszukiwanie kryptowalut**: Możesz użyć pola wyszukiwania, aby znaleźć konkretną kryptowalutę.
- **Śledzenie wiadomości**: Na głównym ekranie aplikacji, w nagłówku możesz przeglądać najnowsze wiadomości związane z kryptowalutami, po naciśnieciu na przycisk News.


## Testowanie 

Aplikacja zawiera testy jednostkowe, które sprawdzają poprawność funkcji.

  ```bash
  npm test
  ```

## Licencja

Ten projekt jest dostępny na licencji MIT. Zobacz plik LICENSE po więcej informacji.






