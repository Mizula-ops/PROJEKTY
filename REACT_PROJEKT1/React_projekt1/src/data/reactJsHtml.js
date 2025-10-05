export const reactJsHtml= [
    {
        'question': 'Które z poniższych stwierdzeń najlepiej opisuje React?',
        'options': [
            'Framework backendowy do budowy interfejsów użytkownika.',
            'Biblioteka JavaScript do budowy interfejsów użytkownika.',
            'Język programowania stworzony przez Facebooka.',
            'System baz danych do aplikacji internetowych.'
        ],
        'correctAnswer': ['Biblioteka JavaScript do budowy interfejsów użytkownika.']
    },
    {
        'question': 'Co to jest JSX?',
        'options': [
            'Rozszerzenie składni JavaScript, które wygląda jak HTML.',
            'Specjalny typ komponentu w React.',
            'Funkcja do zarządzania stanem w aplikacjach React.',
            'Biblioteka do animacji w React.'
        ],
        'correctAnswer': ['Rozszerzenie składni JavaScript, które wygląda jak HTML.']
    },
    {
        'question': 'Jak przekazać dane z komponentu nadrzędnego do podrzędnego?',
        'options': [
            'Za pomocą stanu (state).',
            'Za pomocą propsów (props).',
            'Za pomocą metody `setState()`.',
            'Za pomocą Redux.'
        ],
        'correctAnswer': ['Za pomocą propsów (props).']
    },
    {
        'question': 'Do czego służy hook `useState`?',
        'options': [
            'Do wykonywania efektów ubocznych w komponencie.',
            'Do dodawania lokalnego stanu do komponentów funkcyjnych.',
            'Do pobierania danych z API.',
            'Do tworzenia referencji do elementów DOM.'
        ],
        'correctAnswer': ['Do dodawania lokalnego stanu do komponentów funkcyjnych.']
    },
    {
        'question': 'Co to jest Wirtualny DOM (Virtual DOM)?',
        'options': [
            'Bezpośrednia reprezentacja rzeczywistego DOM w pamięci.',
            'Technika optymalizacyjna, w której wirtualna reprezentacja UI jest przechowywana w pamięci i synchronizowana z "prawdziwym" DOM.',
            'Narzędzie do debugowania komponentów React.',
            'Sposób na pisanie kodu HTML w plikach JavaScript.'
        ],
        'correctAnswer': ['Technika optymalizacyjna, w której wirtualna reprezentacja UI jest przechowywana w pamięci i synchronizowana z "prawdziwym" DOM.']
    },
    {
        'question': 'W której metodzie cyklu życia komponentu klasowego najczęściej wykonuje się zapytania sieciowe?',
        'options': [
            'render()',
            'constructor()',
            'componentDidMount()',
            'componentWillUnmount()'
        ],
        'correctAnswer': ['componentDidMount()']
    },
    {
        'question': 'Jak nazywa się proces aktualizacji Wirtualnego DOM w React?',
        'options': [
            'Rendering',
            'Reconciliation (Uzgodnienie)',
            'Mounting (Montowanie)',
            'Committing (Zatwierdzanie)'
        ],
        'correctAnswer': ['Reconciliation (Uzgodnienie)']
    },
    {
        'question': 'Do czego służy atrybut `key` podczas renderowania list?',
        'options': [
            'Do stylizowania elementów listy.',
            'Do identyfikacji, które elementy uległy zmianie, zostały dodane lub usunięte.',
            'Do przekazywania unikalnej wartości do komponentu potomnego jako prop.',
            'Do obsługi zdarzeń kliknięcia na elemencie listy.'
        ],
        'correctAnswer': ['Do identyfikacji, które elementy uległy zmianie, zostały dodane lub usunięte.']
    },
    {
        'question': 'Czym są propsy (props) w React?',
        'options': [
            'Wewnętrznym stanem komponentu, który może być modyfikowany.',
            'Argumentami przekazywanymi do komponentów, podobnymi do atrybutów HTML.',
            'Metodami cyklu życia komponentu.',
            'Funkcjami do obsługi zdarzeń.'
        ],
        'correctAnswer': ['Argumentami przekazywanymi do komponentów, podobnymi do atrybutów HTML.']
    },
    {
        'question': 'Który hook służy do wykonywania efektów ubocznych (np. zapytań do API) w komponentach funkcyjnych?',
        'options': [
            'useState',
            'useContext',
            'useReducer',
            'useEffect'
        ],
        'correctAnswer': ['useEffect']
    },
    {
        'question': 'Jak warunkowo renderować komponent w JSX?',
        'options': [
            'Używając pętli `for`.',
            'Używając instrukcji `switch`.',
            'Używając operatora trójargumentowego lub operatora `&&`.',
            'Używając funkcji `map()`.'
        ],
        'correctAnswer': ['Używając operatora trójargumentowego lub operatora `&&`.']
    },
    {
        'question': 'Co to jest komponent wyższego rzędu (Higher-Order Component - HOC)?',
        'options': [
            'Komponent, który renderuje inny komponent.',
            'Funkcja, która przyjmuje komponent i zwraca nowy komponent z rozszerzoną funkcjonalnością.',
            'Specjalny hook do zarządzania globalnym stanem.',
            'Podstawowy element budulcowy aplikacji React.'
        ],
        'correctAnswer': ['Funkcja, która przyjmuje komponent i zwraca nowy komponent z rozszerzoną funkcjonalnością.']
    },
    {
        'question': 'Do czego służy `React.Fragment`?',
        'options': [
            'Do tworzenia fragmentów kodu wielokrotnego użytku.',
            'Do grupowania listy dzieci bez dodawania dodatkowych węzłów do DOM.',
            'Do optymalizacji wydajności renderowania.',
            'Do obsługi błędów w komponentach.'
        ],
        'correctAnswer': ['Do grupowania listy dzieci bez dodawania dodatkowych węzłów do DOM.']
    },
    {
        'question': 'Jaka jest główna różnica między komponentem klasowym a funkcyjnym?',
        'options': [
            'Komponenty klasowe mogą używać stanu, a funkcyjne nie.',
            'Komponenty funkcyjne są szybsze.',
            'Komponenty klasowe używają metod cyklu życia, a funkcyjne hooków.',
            'Nie ma żadnej różnicy.'
        ],
        'correctAnswer': ['Komponenty klasowe używają metod cyklu życia, a funkcyjne hooków.']
    },
    {
        'question': 'Które z poniższych NIE jest hookiem w React?',
        'options': [
            'useState',
            'useEffect',
            'useFetch',
            'useContext'
        ],
        'correctAnswer': ['useFetch']
    },
    {
        'question': 'Co to jest Redux?',
        'options': [
            'Biblioteka do routingu w React.',
            'Narzędzie do budowania interfejsów użytkownika.',
            'Przewidywalny kontener stanu dla aplikacji JavaScript.',
            'System do testowania komponentów React.'
        ],
        'correctAnswer': ['Przewidywalny kontener stanu dla aplikacji JavaScript.']
    },
    {
        'question': 'Jak nazywa się główny plik wejściowy w typowej aplikacji stworzonej za pomocą `create-react-app`?',
        'options': [
            'app.js',
            'main.js',
            'index.js',
            'react.js'
        ],
        'correctAnswer': ['index.js']
    },
    {
        'question': 'Do czego służy hook `useRef`?',
        'options': [
            'Do zarządzania stanem komponentu.',
            'Do tworzenia mutowalnego obiektu, który nie powoduje ponownego renderowania komponentu przy zmianie.',
            'Do wykonywania zapytań sieciowych.',
            'Do przekazywania danych między komponentami.'
        ],
        'correctAnswer': ['Do tworzenia mutowalnego obiektu, który nie powoduje ponownego renderowania komponentu przy zmianie.']
    },
    {
        'question': 'Czym jest "props drilling"?',
        'options': [
            'Techniką optymalizacji renderowania.',
            'Procesem przekazywania propsów przez wiele poziomów komponentów.',
            'Sposobem na obsługę błędów w aplikacji.',
            'Wzorcem projektowym do tworzenia komponentów.'
        ],
        'correctAnswer': ['Procesem przekazywania propsów przez wiele poziomów komponentów.']
    },
    {
        'question': 'Który hook jest alternatywą dla `useState` przy bardziej złożonej logice stanu?',
        'options': [
            'useEffect',
            'useMemo',
            'useReducer',
            'useCallback'
        ],
        'correctAnswer': ['useReducer']
    },
    {
        'question': 'Co robi metoda `ReactDOM.render()`?',
        'options': [
            'Tworzy nowy komponent React.',
            'Renderuje komponent React do określonego węzła DOM.',
            'Aktualizuje stan komponentu.',
            'Usuwa komponent z DOM.'
        ],
        'correctAnswer': ['Renderuje komponent React do określonego węzła DOM.']
    },
    {
        'question': 'Do czego służy biblioteka React Router?',
        'options': [
            'Do zarządzania stanem aplikacji.',
            'Do wykonywania testów jednostkowych.',
            'Do implementacji routingu po stronie klienta w aplikacjach React.',
            'Do stylizowania komponentów.'
        ],
        'correctAnswer': ['Do implementacji routingu po stronie klienta w aplikacjach React.']
    },
    {
        'question': 'Jak zapobiec ponownemu renderowaniu komponentu, jeśli jego propsy się nie zmieniły?',
        'options': [
            'Używając `React.memo` lub `PureComponent`.',
            'Używając hooka `useState`.',
            'Używając HOC `withRouter`.',
            'Definiując komponent jako klasę.'
        ],
        'correctAnswer': ['Używając `React.memo` lub `PureComponent`.']
    },
    {
        'question': 'W Redux, co jest jedynym źródłem prawdy (single source of truth)?',
        'options': [
            'Komponenty',
            'Akcje (actions)',
            'Reduktory (reducers)',
            'Magazyn (store)'
        ],
        'correctAnswer': ['Magazyn (store)']
    },
    {
        'question': 'Co to jest "lifting state up"?',
        'options': [
            'Przenoszenie stanu do komponentu nadrzędnego, aby współdzielić go między rodzeństwem.',
            'Użycie Redux do zarządzania stanem.',
            'Przechowywanie stanu w `localStorage`.',
            'Zmiana komponentu funkcyjnego na klasowy.'
        ],
        'correctAnswer': ['Przenoszenie stanu do komponentu nadrzędnego, aby współdzielić go między rodzeństwem.']
    },
    {
        'question': 'Do czego służy hook `useContext`?',
        'options': [
            'Do tworzenia kontekstu.',
            'Do konsumowania wartości z najbliższego dostawcy (Provider) kontekstu.',
            'Do aktualizacji wartości w kontekście.',
            'Do zarządzania stanem lokalnym.'
        ],
        'correctAnswer': ['Do konsumowania wartości z najbliższego dostawcy (Provider) kontekstu.']
    },
    {
        'question': 'Jak obsłużyć zdarzenie `onClick` w JSX?',
        'options': [
            '<button onclick="myFunction()">Click</button>',
            '<button onClick={myFunction}>Click</button>',
            '<button OnClick="myFunction()">Click</button>',
            '<button click={myFunction}>Click</button>'
        ],
        'correctAnswer': ['<button onClick={myFunction}>Click</button>']
    },
    {
        'question': 'Czym jest "lazy loading" w kontekście Reacta?',
        'options': [
            'Techniką, która opóźnia ładowanie komponentów, dopóki nie są potrzebne.',
            'Sposobem na powolne animowanie pojawiania się elementów.',
            'Wzorcem do powolnego pobierania danych z serwera.',
            'Mechanizmem do leniwej inicjalizacji stanu.'
        ],
        'correctAnswer': ['Techniką, która opóźnia ładowanie komponentów, dopóki nie są potrzebne.']
    },
    {
        'question': 'Do czego służy `React.StrictMode`?',
        'options': [
            'Do wymuszania ścisłych reguł formatowania kodu.',
            'Do uruchamiania aplikacji w trybie produkcyjnym.',
            'Do podświetlania potencjalnych problemów w aplikacji.',
            'Do zabezpieczania aplikacji przed atakami XSS.'
        ],
        'correctAnswer': ['Do podświetlania potencjalnych problemów w aplikacji.']
    },
    {
        'question': 'Co zwraca hook `useState`?',
        'options': [
            'Pojedynczą wartość stanu.',
            'Obiekt zawierający stan.',
            'Tablicę z aktualną wartością stanu i funkcją do jego aktualizacji.',
            'Funkcję do aktualizacji stanu.'
        ],
        'correctAnswer': ['Tablicę z aktualną wartością stanu i funkcją do jego aktualizacji.']
    },
    {
        'question': 'W jaki sposób w JSX dodaje się komentarze?',
        'options': [
            '',
            '// To jest komentarz',
            '{/* To jest komentarz */}',
            '## To jest komentarz'
        ],
        'correctAnswer': ['{/* To jest komentarz */}']
    },
    {
        'question': 'Która biblioteka jest najczęściej używana do testowania aplikacji React?',
        'options': [
            'Mocha',
            'Jasmine',
            'Jest & React Testing Library',
            'Cypress'
        ],
        'correctAnswer': ['Jest & React Testing Library']
    },
    {
        'question': 'Jak przekazać referencję (ref) z komponentu nadrzędnego do potomnego?',
        'options': [
            'Jako zwykły prop o nazwie `ref`.',
            'Używając `React.forwardRef`.',
            'Używając hooka `useContext`.',
            'To jest niemożliwe.'
        ],
        'correctAnswer': ['Używając `React.forwardRef`.']
    },
    {
        'question': 'W Redux, która funkcja jest odpowiedzialna за modyfikację stanu?',
        'options': [
            'Action Creator',
            'Store',
            'Reducer',
            'Middleware'
        ],
        'correctAnswer': ['Reducer']
    },
    {
        'question': 'Jaki jest cel pustej tablicy zależności `[]` w `useEffect`?',
        'options': [
            'Powoduje, że efekt uruchamia się przy każdej zmianie stanu.',
            'Powoduje, że efekt uruchamia się tylko raz, po zamontowaniu komponentu.',
            'Powoduje błąd, tablica nie może być pusta.',
            'Powoduje, że efekt uruchamia się przy odmontowywaniu komponentu.'
        ],
        'correctAnswer': ['Powoduje, że efekt uruchamia się tylko raz, po zamontowaniu komponentu.']
    },
    {
        'question': 'Do czego służy hook `useMemo`?',
        'options': [
            'Do zapamiętywania (memoizacji) funkcji zwrotnej.',
            'Do zapamiętywania (memoizacji) wyniku kosztownej obliczeniowo funkcji.',
            'Do zarządzania złożonym stanem.',
            'Do tworzenia referencji do elementów DOM.'
        ],
        'correctAnswer': ['Do zapamiętywania (memoizacji) wyniku kosztownej obliczeniowo funkcji.']
    },
    {
        'question': 'Co to są portale (portals) w React?',
        'options': [
            'Sposób na renderowanie dzieci w węźle DOM, który istnieje poza hierarchią DOM komponentu nadrzędnego.',
            'Narzędzie do tworzenia aplikacji desktopowych z React.',
            'Biblioteka do nawigacji między stronami.',
            'Wzorzec do komunikacji między komponentami.'
        ],
        'correctAnswer': ['Sposób na renderowanie dzieci w węźle DOM, który istnieje poza hierarchią DOM komponentu nadrzędnego.']
    },
    {
        'question': 'Czym są kontrolowane komponenty (controlled components) w formularzach React?',
        'options': [
            'Komponenty, których stan jest kontrolowany przez React.',
            'Komponenty, które same zarządzają swoim stanem.',
            'Komponenty, które nie mają stanu.',
            'Komponenty, które pobierają dane z `localStorage`.'
        ],
        'correctAnswer': ['Komponenty, których stan jest kontrolowany przez React.']
    },
    {
        'question': 'Jaki jest odpowiednik `componentDidCatch` w komponentach funkcyjnych?',
        'options': [
            'Hook `useError`.',
            'Granice błędów (Error Boundaries) z komponentem klasowym.',
            'Hook `useEffect` z blokiem `try...catch`.',
            'Nie ma bezpośredniego odpowiednika w postaci hooka; używa się Error Boundaries.'
        ],
        'correctAnswer': ['Nie ma bezpośredniego odpowiednika w postaci hooka; używa się Error Boundaries.']
    },
    {
        'question': 'Co robi `npx create-react-app my-app`?',
        'options': [
            'Instaluje Reacta globalnie na komputerze.',
            'Tworzy nową aplikację React z gotową konfiguracją.',
            'Uruchamia serwer deweloperski dla istniejącej aplikacji.',
            'Buduje aplikację do wersji produkcyjnej.'
        ],
        'correctAnswer': ['Tworzy nową aplikację React z gotową konfiguracją.']
    },
    {
        'question': 'Czy propsy są mutowalne (można je zmieniać) wewnątrz komponentu?',
        'options': [
            'Tak, można je dowolnie modyfikować.',
            'Nie, propsy są tylko do odczytu (read-only).',
            'Tylko w komponentach klasowych.',
            'Tylko przy użyciu hooka `useState`.'
        ],
        'correctAnswer': ['Nie, propsy są tylko do odczytu (read-only).']
    },
    {
        'question': 'Do czego służy hook `useCallback`?',
        'options': [
            'Do memoizacji wartości.',
            'Do memoizacji funkcji zwrotnej (callback).',
            'Do wywoływania funkcji po renderowaniu.',
            'Do tworzenia funkcji zwrotnych.'
        ],
        'correctAnswer': ['Do memoizacji funkcji zwrotnej (callback).']
    },
    {
        'question': 'Jakie narzędzie jest najczęściej używane do transpilacji JSX na zwykły JavaScript?',
        'options': [
            'Webpack',
            'Babel',
            'TypeScript',
            'ESLint'
        ],
        'correctAnswer': ['Babel']
    },
    {
        'question': 'Co to jest "unidirectional data flow" (jednokierunkowy przepływ danych)?',
        'options': [
            'Dane mogą przepływać zarówno w górę, jak i w dół drzewa komponentów.',
            'Dane przepływają tylko w jednym kierunku: od komponentów nadrzędnych do podrzędnych.',
            'Dane są przechowywane w globalnym obiekcie.',
            'Stan może być modyfikowany przez dowolny komponent.'
        ],
        'correctAnswer': ['Dane przepływają tylko w jednym kierunku: od komponentów nadrzędnych do podrzędnych.']
    },
    {
        'question': 'W którym roku React został po raz pierwszy upubliczniony?',
        'options': [
            '2011',
            '2013',
            '2015',
            '2017'
        ],
        'correctAnswer': ['2013']
    },
    {
        'question': 'Która firma stworzyła i utrzymuje React?',
        'options': [
            'Google',
            'Microsoft',
            'Facebook (Meta)',
            'Twitter'
        ],
        'correctAnswer': ['Facebook (Meta)']
    },
    {
        'question': 'Czym jest "hydration" w kontekście renderowania po stronie serwera (SSR)?',
        'options': [
            'Procesem generowania HTML na serwerze.',
            'Procesem, w którym React dodaje obsługę zdarzeń do statycznego HTML-a wygenerowanego na serwerze.',
            'Techniką dzielenia kodu (code splitting).',
            'Sposobem na buforowanie odpowiedzi serwera.'
        ],
        'correctAnswer': ['Procesem, w którym React dodaje obsługę zdarzeń do statycznego HTML-a wygenerowanego na serwerze.']
    },
    {
        'question': 'Co to jest Styled Components?',
        'options': [
            'Wbudowany w React system do stylizacji.',
            'Biblioteka do pisania CSS wewnątrz plików JavaScript (CSS-in-JS).',
            'Framework CSS podobny do Bootstrap.',
            'Narzędzie do lintowania stylów.'
        ],
        'correctAnswer': ['Biblioteka do pisania CSS wewnątrz plików JavaScript (CSS-in-JS).']
    },
    {
        'question': 'Co należy zwrócić z funkcji czyszczącej (cleanup function) w `useEffect`?',
        'options': [
            'Nic, funkcja nie powinna nic zwracać.',
            'Wartość logiczną `true` lub `false`.',
            'Funkcję, która zostanie wykonana przed odmontowaniem komponentu.',
            'Obietnicę (Promise).'
        ],
        'correctAnswer': ['Funkcję, która zostanie wykonana przed odmontowaniem komponentu.']
    },
    {
        'question': 'Jakie jest domyślne zachowanie zdarzeń w React?',
        'options': [
            'Są to standardowe zdarzenia przeglądarki.',
            'Są to zdarzenia syntetyczne (Synthetic Events), które opakowują natywne zdarzenia przeglądarki.',
            'Są one obsługiwane tylko w fazie propagacji (bubbling).',
            'Nie ma domyślnego zachowania, trzeba je zdefiniować.'
        ],
        'correctAnswer': ['Są to zdarzenia syntetyczne (Synthetic Events), które opakowują natywne zdarzenia przeglądarki.']
    }
]