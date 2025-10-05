export const dataBase = [
    {
        'question': 'Zaznacz super klucze dla relacji R(A, B, C, D, E):',
        'options': [
            '{A,B}+={A,B,C,D,E}',
            '{C,D}+={C,D,B}',
            '{A,B,C}+={A,B,C,D,E}',
            '{A,B,C}+={A,B,C}'
        ],
        'correctAnswer': ['{A,B}+={A,B,C,D,E}', '{A,B,C}+={A,B,C,D,E}']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących XML są PRAWDZIWE?',
        'options': [
            'Elementy mogą być zagnieżdżone w innych elementach.',
            'Dane mają strukturę hierarchiczna.',
            'Elementy mogą się powtarzać w jednym XML\'u.',
            'Atrybuty mogą zawierać w sobie elementy.',
            'Atrybuty mogą się powtarzać w ramach elementu.'
        ],
        'correctAnswer': ['Elementy mogą być zagnieżdżone w innych elementach.', 'Dane mają strukturę hierarchiczna.', 'Elementy mogą się powtarzać w jednym XML\'u.']
    },
    {
        'question': 'Algorytmami złączania (join) wykorzystującymi iloczyn kartezjański są:',
        'options': [
            'Index Nested Laop Join (INLJ)',
            'Block Nested Loop Join (BNLJ)',
            'Hash Join (H)',
            'Nested Loop Join (NLJ)',
            'Sort-Merge Join (SMJ)'
        ],
        'correctAnswer': ['Block Nested Loop Join (BNLJ)', 'Nested Loop Join (NLJ)']
    },
    {
        'question': 'W jakim języku jest niniejszy fragment kodu: for $mt in doc("dblp.xml")/dblp/mastersthesis where $mt/year/text()="1999"',
        'options': [
            'XQuery',
            'XML',
            'XSD',
            'XPath',
            'DTD'
        ],
        'correctAnswer': ['XQuery']
    },
    {
        'question': 'Regułami Armstronga są',
        'options': [
            'Podział i łączenie (Split/Combine)',
            'Przechodniość (Transitivity)',
            'Zależności (Dependency)',
            'Wnioskowania (Inference)',
            'Redukcja (Reduction)'
        ],
        'correctAnswer': ['Podział i łączenie (Split/Combine)', 'Przechodniość (Transitivity)', 'Redukcja (Reduction)']
    },
    {
        'question': 'Komenda DELETE FROM tabela1; spowoduje',
        'options': [
            'usunięcie tabela1.',
            'usunięcie rekordów z tabela1.',
            'usunięcie atrybutów z tabela1.',
            'usunięcie relacji z tabela1.'
        ],
        'correctAnswer': ['usunięcie rekordów z tabela1.']
    },
    {
        'question': 'W algorytmach Nested Loop Join (NLJ) i Block Nested Loop Join (BNLJ) w zewnętrznej pętli powinna być relacja, która:',
        'options': [
            'jest większa',
            'jest mniejsza',
            'nie ma to znaczenia'
        ],
        'correctAnswer': ['jest mniejsza']
    },
    {
        'question': 'Jak nazywa się operacja, której wynik zawiera wszystkie pary rekordów z dwóch relacji, niezależnie od tego, czy ich wartości atrybutów są zgodne?',
        'options': [
            'złączenie (join)',
            'iloczyn kartezjański (Cartesian product)',
            'przecięcie zbiorów (intersect)',
            'różnica zbiorów (except)'
        ],
        'correctAnswer': ['iloczyn kartezjański (Cartesian product)']
    },
    {
        'question': 'oznacza, ze dane użyte podczas realizacji transakcji nie mogą być wykorzystane przez drugą transakcje do czasu zakończenia pierwszej.',
        'options': [
            'Izolacja',
            'Atomowość',
            'Znakowanie czasem',
            'Serializacja'
        ],
        'correctAnswer': ['Izolacja']
    },
    {
        'question': 'Wybierz klucz spośród super kluczy dla relacji R(A, B, C, D, E, F)',
        'options': [
            '{A, B, C, D}+',
            '{A,B,C}+',
            '{A, B}+',
            '{A, B, C, D, E}+'
        ],
        'correctAnswer': ['{A, B}+']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących B+ drzew są PRAWDZIWE:',
        'options': [
            'Można przyśpieszyć wyszukiwanie utrzymując część drzewa w pamięci RAM.',
            'Liczba potomków węźle (fanout) powinna być taka aby zając jeden blok danych.',
            'Aby działać efektywnie drzewo powinno być całkowicie zapełnione.',
            'Koszt wyszukania danych w drzewie nie zależy od liczby potomków w węźle (fanout).'
        ],
        'correctAnswer': ['Można przyśpieszyć wyszukiwanie utrzymując część drzewa w pamięci RAM.', 'Liczba potomków węźle (fanout) powinna być taka aby zając jeden blok danych.']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących dziennika (loga) są PRAWDZIWE:',
        'options': [
            'Wykorzystywany jest do odtworzenia spójnego stanu bazy danych po awarii.',
            'Może służyć jako kopia zapasowa bazy danych (backup).',
            'Zapisywane są informacje o wszystkich wykonanych zapytaniach na bazie danych.',
            'zapisywane są tylko informacje o zmianach w bazie danych.',
            'DBMS wymusza zapisywanie dziennika na dysk.'
        ],
        'correctAnswer': ['Wykorzystywany jest do odtworzenia spójnego stanu bazy danych po awarii.', 'zapisywane są tylko informacje o zmianach w bazie danych.', 'DBMS wymusza zapisywanie dziennika na dysk.']
    },
    {
        'question': 'Zaznacz przywileje możliwe do nadania komendą GRANT',
        'options': [
            'DROP',
            'VIEW',
            'UPDATE',
            'INDEX',
            'CREATE',
            'INSERT',
            'SELECT'
        ],
        'correctAnswer': ['DROP', 'UPDATE', 'CREATE', 'INDEX', 'INSERT', 'SELECT']
    },
    {
        'question': 'W ramach optymalizacji zapytań',
        'options': [
            'Wykonuje się wiele zapytań i zwracany jest wynik najszybszego z nich.',
            'Można go zastąpić właściwym doborem indeksów',
            'Wykonuje się tylko jeden plan, który prawdopodobnie najszybciej się wykona.'
        ],
        'correctAnswer': ['Wykonuje się tylko jeden plan, który prawdopodobnie najszybciej się wykona.']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących blokad są PRAWDZIWE?',
        'options': [
            'Można założyć blokadę UPDATE dla zasobu, który ma założoną blokadę współdzieloną.',
            'Nie można założyć blokady wyłącznej dla zasobu, który ma założoną blokade współdzieloną',
            'Jeśli jest założona blokada wyłączna, nie można założyć żadnej innej blokady.',
            'Blokada UPDATE przekształca się w blokadę współdzieloną.',
            'Chęć założenia blokady wyłącznej powoduje usunięcie wszystkich założonych wcześniej blokad współdzielonych.'
        ],
        'correctAnswer': ['Można założyć blokadę UPDATE dla zasobu, który ma założoną blokadę współdzieloną.', 'Nie można założyć blokady wyłącznej dla zasobu, który ma założoną blokade współdzieloną', 'Jeśli jest założona blokada wyłączna, nie można założyć żadnej innej blokady.']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących diagramów E/R są PRAWDZIWE:',
        'options': [
            'Trójkątem oznacza sie podklasy zbioru encji.',
            'Słabe zbiory encji oznacza się przerywaną linią konturu.',
            'Pogrubiona linia łącząca zbiór encji z relacją oznacza, ze jest to relacja jeden do wielu.',
            'Słaby zbiory encji oznacza, że nie istnieje on samoistnie bez zdefiniowana innego zbioru encji.',
            'Podkreślone atrybuty tworzą klucz główny.'
        ],
        'correctAnswer': ['Słaby zbiory encji oznacza, że nie istnieje on samoistnie bez zdefiniowana innego zbioru encji.', 'Podkreślone atrybuty tworzą klucz główny.']
    },
    {
        'question': 'Podaj najniższą postać normalną, w której występują zależności wielowartościowe',
        'options': [
            'BCNF',
            'pierwsza',
            'czwarta',
            'druga',
            'trzecia',
            'piąta'
        ],
        'correctAnswer': ['piąta']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących diagramów E/R są PRAWDZIWE',
        'options': [
            'Relacja może być połączona tylko z dwoma zbiorami encji.',
            'Dwie strzałki dochodzące do relacji oznaczają, że jest ona typu wiele do wielu.',
            'Zbiór encji oznacza się prostokątem.',
            'Atrybuty oznacza się owalem.',
            'Relacje oznacza się rombem.'
        ],
        'correctAnswer': ['Zbiór encji oznacza się prostokątem.', 'Atrybuty oznacza się owalem.', 'Relacje oznacza się rombem.']
    },
    {
        'question': 'Polecenie COMMIT oznacza:',
        'options': [
            'Założenie blokad.',
            'Przywrócenie stanu bazy danych sprzed rozpoczęcia transakcji.',
            'Brak możliwości wycofania wyników operacji z bazy.',
            'Zakończenie transakcji.'
        ],
        'correctAnswer': ['Zakończenie transakcji.']
    },
    {
        'question': 'Klucz główny',
        'options': [
            'może składać się z wielu atrybutów.',
            'musi być utworzony dla każdej tabeli.',
            'nie może mieć wartości NULL.',
            'jest zawsze częścią klucza obcego.',
            'baza danych automatycznie zakłada na nim indeks powiązany (clustered index).',
            'musi mieć unikalne wartości.'
        ],
        'correctAnswer': ['może składać się z wielu atrybutów.', 'nie może mieć wartości NULL.', 'baza danych automatycznie zakłada na nim indeks powiązany (clustered index).', 'musi mieć unikalne wartości.']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących DTD i XSD są PRAWDZIWE?',
        'options': [
            'W XSD można definiować typy danych.',
            'Każdy XML musi być zgodny z DTD lub z XSD.',
            'W DTD można definiować elementy złożone.',
            'DTD i XSD umożliwiają sprawdzenie poprawności XML\'a.',
            'DTD jest bardziej rozbudowane niż XSD.'
        ],
        'correctAnswer': ['W XSD można definiować typy danych.', 'DTD i XSD umożliwiają sprawdzenie poprawności XML\'a.']
    },
    {
        'question': 'Jeśli w relacji A atrybut jest kluczem obcym wskazującym na relacje B. Το wskazywany atrybut w relacji B musi być',
        'options': [
            'super kluczem',
            'nie może być kluczem',
            'kluczem głównym',
            'kluczem kandydującym',
            'kluczem obcym'
        ],
        'correctAnswer': ['kluczem głównym']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących indeksów są PRAWDZIWE:',
        'options': [
            'Tablice bitów wykorzystuje się gdy atrybut ma bardzo dużo różnych wartości.',
            'Tablice haszujące można zastosować do przeszukania danych o określonej wartości, np. równych 5.',
            'B+ drzewa można zastosować do przeszukania danych z podanego zakresu, np. od 5 do 15.',
            'Tablice haszujące można zastosować do przeszukania danych z podanego zakresu, np. od 5 do 15.',
            'B+ drzewa można zastosować do przeszukania danych o określonej wartości, np. równych 5.'
        ],
        'correctAnswer': ['Tablice haszujące można zastosować do przeszukania danych o określonej wartości, np. równych 5.', 'B+ drzewa można zastosować do przeszukania danych z podanego zakresu, np. od 5 do 15.', 'B+ drzewa można zastosować do przeszukania danych o określonej wartości, np. równych 5.']
    },
    {
        'question': 'Plan fizyczny optymalizacji zapytania obejmuje',
        'options': [
            'Dobór właściwych indeksów.',
            'Budowa planu algebry relacji.',
            'Uwzględnienie statystyk danych w tym histogramów.',
            'Dobór najlepszego algorytmu łączenia (join).',
            'Określenie kolejności wykonania zapytań w ramach bloku zapytań transakcji'
        ],
        'correctAnswer': ['Dobór właściwych indeksów.', 'Uwzględnienie statystyk danych w tym histogramów.', 'Dobór najlepszego algorytmu łączenia (join).']
    },
    {
        'question': 'Które własności algebry relacji są poprawne:',
        'options': [
            'σA( R ∩ P ) = σB( σA( R ) )',
            'σ{A∨B}( R ) = σB( σA( R ) )',
            'σA σB( R ) = σB σA( R )',
            'π{a1,…,an}( σA( R ) ) = σA( π_{a1,…,an}( R ) )'
        ],
        'correctAnswer': ['σA σB( R ) = σB σA( R )', 'π{a1,…,an}( σA( R ) ) = σA( π_{a1,…,an}( R ) )']
    },
    {
        'question': 'Zapytanie SQL: SELECT DISTINCT aa, bb FROM X JOIN Y ON aa = cc WHERE aa > 3 zapisane w algebrze relacji będzie miało postać:',
        'options': [
            'σ(aa,bb) (ρ(aa>3) (X ⋈"aa=cc" Y))',
            'ρ(aa,bb) (σ(aa>3) (X ⋈"aa=cc" Y))',
            'σ(aa,bb) (Π(aa>3) (X ⋈"aa=cc" Y))',
            'Π(aa,bb) (σ(aa>3) (X ⋈"aa=cc" Y))'
        ],
        'correctAnswer': ['Π(aa,bb) (σ(aa>3) (X ⋈"aa=cc" Y))']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących ACID są PRAWDZIWE?',
        'options': [
            'Spójność oznacza, że nie można wpisać niepoprawnych danych do bazy (łamiących np. więzy integralności lub ograniczeń',
            'Atomowość oznacza, że albo wszystkie zapytania zakończyły się poprawnie, albo nie wykonały się.',
            'Trwałość oznacza, że po zakończeniu transakcji (commit) dane są bezpiecznie zapisane w bazie.',
            'Izolacja oznacza, że baza działa w takim trybie jakby korzystał z niej tylko jeden użytkownik.'
        ],
        'correctAnswer': ['Spójność oznacza, że nie można wpisać niepoprawnych danych do bazy (łamiących np. więzy integralności lub ograniczeń', 'Atomowość oznacza, że albo wszystkie zapytania zakończyły się poprawnie, albo nie wykonały się.', 'Trwałość oznacza, że po zakończeniu transakcji (commit) dane są bezpiecznie zapisane w bazie.', 'Izolacja oznacza, że baza działa w takim trybie jakby korzystał z niej tylko jeden użytkownik.']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących komendy GRANT są PRAWDZIWE?',
        'options': [
            'Nadaje uprawnienia dotyczące wszystkich rekordów całej tabeli lub wybranych kolumn.',
            'Po utworzeniu tabeli należy nadać sobie do niej uprawnienia.',
            'Wykorzystanie widoków umożliwia nadanie uprawnień tylko do wybranej grupy rekordów.',
            'Można nadawać uprawnienia tylko użytkownikom.'
        ],
        'correctAnswer': ['Nadaje uprawnienia dotyczące wszystkich rekordów całej tabeli lub wybranych kolumn.', 'Wykorzystanie widoków umożliwia nadanie uprawnień tylko do wybranej grupy rekordów.']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących Sort-Merge Join (SMJ) są PRAWDZIWE?',
        'options': [
            'SMJ potrzebuje do pracy mniej pamięci niż algorytm Hash Join (H)).',
            'Koszt obliczeniowy SMJ jest równy P(R) + T(R)P(S) + OUT.',
            'Jeżeli dane wejściowe są posortowane to czas przetwarzania algorytmu jest liniowy.',
            'Optymalizacja SMJ polega na wykonaniu B krotnego złączania (merge).',
            'Złączanie po atrybutach z duplikatami znacząco wydłuża pracę algorytmu.'
        ],
        'correctAnswer': ['SMJ potrzebuje do pracy mniej pamięci niż algorytm Hash Join (H)).', 'Jeżeli dane wejściowe są posortowane to czas przetwarzania algorytmu jest liniowy.', 'Optymalizacja SMJ polega na wykonaniu B krotnego złączania (merge).', 'Złączanie po atrybutach z duplikatami znacząco wydłuża pracę algorytmu.']
    },
    {
        'question': 'Zapytanie XPath //title/text() w wyniku zwróci:',
        'options': [
            'wszystkie wartości zapisane w elemencie "title".',
            'fragment XML\'a z zawartością wszystkich elementów "title".',
            'fragment XML\'a z zawartością pierwszego napotkanego elementu "title".',
            'pierwszą napotkaną wartość zapisane w elemencie "title".'
        ],
        'correctAnswer': ['wszystkie wartości zapisane w elemencie "title".']
    },
    {
        'question': 'Indeks wtórny (secondary) powinien być utworzony na atrybucie gdy:',
        'options': [
            'Zawiera dużo duplikatów.',
            'Często pojawia się w zapytaniach.',
            'Jest kluczem głównym.',
            'Ma ustawione UNIQUE.'
        ],
        'correctAnswer': ['Zawiera dużo duplikatów.', 'Często pojawia się w zapytaniach.', 'Ma ustawione UNIQUE.']
    },
    {
        'question': 'Tworząc diagram E/R dla księgarni',
        'options': [
            'książka będzie zbiorem encji',
            'tytuł książki będzie atrybutem',
            'Wydana przez będzie relacją'
        ],
        'correctAnswer': ['książka będzie zbiorem encji', 'tytuł książki będzie atrybutem', 'Wydana przez będzie relacją']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących przechowywania danych są PRAWDZIE:',
        'options': [
            'Zastosowanie indeksu powiązanego (clustered index) skutkuje sekwencyjnym ułożeniem danych na dysku.',
            'RAID jest wykorzystywany aby zmniejszyć ryzyko utraty danych z powodu awarii dysku.',
            'Rozmiar bloku dyskowego nie ma wpływu na wydajność bazy danych.',
            'RAID pozwala na przyśpieszenie operacji we/wy.',
            'Dane z dziennika (log) przechowywane są tylko w pamięci operacyjnej.'
        ],
        'correctAnswer': ['Zastosowanie indeksu powiązanego (clustered index) skutkuje sekwencyjnym ułożeniem danych na dysku.', 'RAID jest wykorzystywany aby zmniejszyć ryzyko utraty danych z powodu awarii dysku.', 'RAID pozwala na przyśpieszenie operacji we/wy.']
    },
    {
        'question': 'Dopasuj symbol do nazwy operacji w algebrze relacji',
        'options': [
            'pierwsze - selekcja',
            'drugie - zmiana nazwy (alias)',
            'trzecie - projekcja',
            'czwarte - iloczyn kartezjański',
            'piąte - złączenie (join)'
        ],
        'correctAnswer': ['pierwsze - selekcja', 'drugie - zmiana nazwy (alias)', 'trzecie - projekcja', 'czwarte - iloczyn kartezjański', 'piąte - złączenie (join)']
    },
    {
        'question': 'W trybie Mandatory Access Control:',
        'options': [
            'Mając dostęp do materiałów ściśle tajnych mogę zapisywać do dokumentu z klauzulą poufne.',
            'Mając dostęp do materiałów tajnych mogę odczytać dokument z klauzulą poufne.',
            'Mając dostęp do materiałów tajnych mogę odczytać dokument z klauzulą ściśle tajne.',
            'Mając dostęp do materiałów poufnych mogę odczytać dokument z klauzulą poufne.'
        ],
        'correctAnswer': ['Mając dostęp do materiałów tajnych mogę odczytać dokument z klauzulą poufne.', 'Mając dostęp do materiałów poufnych mogę odczytać dokument z klauzulą poufne.']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących histogramów są PRAWDZIWE?',
        'options': [
            'Są wykorzystywane do oszacowania czasu wykonania zapytania.',
            'Zawierają pełną listę wartości atrybutów występujących w tabeli.',
            'Można je parametryzować poprzez wybór liczby koszyków i ich typ.',
            'Musza dotyczyć tylko jednego atrybutu (są jednowymiarowe)',
            'Histogramy mogą być aktualizowane.'
        ],
        'correctAnswer': ['Są wykorzystywane do oszacowania czasu wykonania zapytania.', 'Można je parametryzować poprzez wybór liczby koszyków i ich typ.', 'Histogramy mogą być aktualizowane.']
    },
    {
        'question': '_________jest atomową sekwencją działań w bazie danych.',
        'options': [
            'Współbieżność',
            'Relacja',
            'Transakcja'
        ],
        'correctAnswer': ['Transakcja']
    },
    {
        'question': 'Indeksy w bazie danych mogą wykorzystywać następujące struktury danych',
        'options': [
            'B+ drzewa',
            'Listy jednokierunkowe',
            'Drzewa binarne',
            'Tablice bitów',
            'Tablice haszujące'
        ],
        'correctAnswer': ['B+ drzewa', 'Tablice bitów', 'Tablice haszujące']
    },
    {
        'question': 'Które z poniższych stwierdzeń dotyczących normalizacji są PRAWDZIWE?',
        'options': [
            'Celem normalizacji jest wyeliminowanie anomalii.',
            'Normalizacja powoduje wzrost liczby tabel.',
            'Dzięki normalizacji w zapytaniach rzadziej pojawia się konieczność łączenia tabel.',
            'BCNF jest bardziej rygorystyczne niż 3 postać normalna.',
            'Przed normalizacją trzeba wykonać denormalizację.'
        ],
        'correctAnswer': ['Celem normalizacji jest wyeliminowanie anomalii.', 'Normalizacja powoduje wzrost liczby tabel.', 'BCNF jest bardziej rygorystyczne niż 3 postać normalna.']
    },
    {
        'question': 'Przyspieszenie algorytmu External Merge Sort można uzyskać dzięki:',
        'options': [
            'Zwiększeniu liczby buforów',
            'Zwiększeniu rozmiaru początkowych przebiegów',
            'Wykorzystaniu B+1 buforów do redukcji liczby przebiegów'
        ],
        'correctAnswer': ['Zwiększeniu liczby buforów', 'Zwiększeniu rozmiaru początkowych przebiegów', 'Wykorzystaniu B+1 buforów do redukcji liczby przebiegów']
    },
    {
        'question': 'Zaznacz dekompozycję tabel zachowujące zależności dla relacji R(A, B, C, D, E):',
        'options': [
            'R1(A, B), R2(D, E)',
            'R1(A, B, C), R2(D, E)',
            'R1(A, B, C, D), R2(C, D, E)',
            'R1(A, B, C), R2(C, D, E)'
        ],
        'correctAnswer': ['R1(A, B, C, D), R2(C, D, E)', 'R1(A, B, C), R2(C, D, E)']
    },
    {
        'question': 'Które stwierdzenia dotyczące Hash Join są prawdziwe?',
        'options': [
            'Najpierw wykonywana jest faza złączania (matching) a następnie faza podziału (partitioninig).',
            'Liczba koszyków (buckets) nie ma wpływu na szybkość algorytmu.',
            'Koszt obliczeniowy wynosi -3(P(R)+P(S)) + OUT.',
            'Można go łatwo zrównoleglić.',
            'Działa efektywnie jeśli rozmiary tabel mocno się różnią.'
        ],
        'correctAnswer': ['Koszt obliczeniowy wynosi -3(P(R)+P(S)) + OUT.', 'Można go łatwo zrównoleglić.', 'Działa efektywnie jeśli rozmiary tabel mocno się różnią.']
    },
    {
        'question': 'Relacyjnymi bazami danych są:',
        'options': [
            'Cassandra',
            'Oracle',
            'MS Access',
            'SQLite',
            'MySQL',
            'MS SQL Server',
            'HBase',
            'MongoDB'
        ],
        'correctAnswer': ['Oracle', 'MS Access', 'SQLite', 'MySQL', 'MS SQL Server']
    },
    {
        'question': 'Wykorzystując reguły Armstronga określ, które domknięcia relacji R(A,B,C,D) mając dane zależności A→B; B→C; B→C,D są prawdziwe:',
        'options': [
            '(D)+ = {C,D}',
            '(A)+ = {A,B,C,D}',
            '(B)+ = {B,C,D}',
            '(C)+ = {C,D}'
        ],
        'correctAnswer': ['(A)+ = {A,B,C,D}', '(B)+ = {B,C,D}']
    },
    {
        'question': 'Kolejność operacji przy optymalizacji zapytań SQL:',
        'options': [
            '1. Odpalenie zapytania',
            '2. Wyznaczenie planu fizycznego',
            '3. Przekształcenie na plan algebry relacyjnej',
            '4. Optymalizacja planu algebry relacyjnej',
            'Poprawna kolejność: 1 → 3 → 4 → 2'
        ],
        'correctAnswer': ['Poprawna kolejność: 1 → 3 → 4 → 2']
    },
    {
        'question': 'Relacyjna baza danych jest kolekcją:',
        'options': [
            'Tabel',
            'Obiektów',
            'Indeksów',
            'Rekordów'
        ],
        'correctAnswer': ['Tabel']
    },
    {
        'question': 'Zadaniami systemu zarządzania bazą danych są:',
        'options': [
            'Zarządzanie plikami',
            'Wyświetlanie wyników zapytań',
            'Zarządzanie dostępem (autoryzacja)',
            'Optymalizacja zapytań',
            'Zarządzanie blokadami',
            'Zarządzanie transakcjami'
        ],
        'correctAnswer': ['Zarządzanie dostępem (autoryzacja)', 'Optymalizacja zapytań', 'Zarządzanie blokadami', 'Zarządzanie transakcjami']
    },
    {
        'question': 'Elementami modelu logicznego bazy danych są:',
        'options': [
            'Pola kluczowe',
            'Typy danych atrybutów',
            'Atrybuty',
            'Nazwa tabeli'
        ],
        'correctAnswer': ['Pola kluczowe', 'Typy danych atrybutów', 'Atrybuty', 'Nazwa tabeli']
    },
    {
        'question': 'Zbiór obiektów tego samego typu w diagramach E/R nazywa się:',
        'options': [
            'Atrybut',
            'Zbiór atrybutów',
            'Encja',
            'Zbiór encji',
            'Zbiór relacji',
            'Relacja'
        ],
        'correctAnswer': ['Zbiór encji']
    },
    {
        'question': 'Parametr opisujący obiekt w diagramie E/R nazywa się:',
        'options': [
            'Relacja',
            'Atrybut',
            'Zbiór atrybutów',
            'Encja',
            'Zbiór encji',
            'Zbiór relacji'
        ],
        'correctAnswer': ['Atrybut']
    },
    {
        'question': 'Z których typów obiektów diagramu E/R tworzy się tabele bazy danych?',
        'options': [
            'Relacja',
            'Encja',
            'Zbiór atrybutów',
            'Atrybut',
            'Zbiór encji'
        ],
        'correctAnswer': ['Relacja', 'Encja', 'Zbiór encji']
    },
    {
        'question': 'Które stwierdzenia są PRAWDZIWE w kontekście SQL?',
        'options': [
            'Duże i małe litery nie mają znaczenia dla ciągów znaków',
            'Jest językiem deklaratywnym',
            'Wartość w komórce tabeli musi być typu atomowego',
            'Duże i małe litery nie mają znaczenia dla komend',
            'Wykonuje operacje na multizbiorach',
            'Do oznaczenia ciągu znaków używa się podwójny cudzysłów'
        ],
        'correctAnswer': ['Jest językiem deklaratywnym', 'Duże i małe litery nie mają znaczenia dla komend', 'Wykonuje operacje na multizbiorach']
    },
    {
        'question': 'Jaki będzie wynik operacji p OR q w SQL jeśli p = TRUE, q = NULL?',
        'options': [
            'FALSE',
            'NULL',
            'TRUE'
        ],
        'correctAnswer': ['TRUE']
    },
    {
        'question': 'Jaki będzie wynik operacji p AND q w SQL jeśli p = TRUE, q = NULL?',
        'options': [
            'NULL',
            'FALSE',
            'TRUE'
        ],
        'correctAnswer': ['NULL']
    },
    {
        'question': 'Jaki będzie wynik operacji p AND q w SQL jeśli p = FALSE, q = NULL?',
        'options': [
            'TRUE',
            'FALSE',
            'NULL'
        ],
        'correctAnswer': ['FALSE']
    },
    {
        'question': 'Jaki będzie wynik operacji p OR q w SQL jeśli p = FALSE, q = NULL?',
        'options': [
            'NULL',
            'FALSE',
            'TRUE'
        ],
        'correctAnswer': ['NULL']
    },
    {
        'question': 'Najniższa postać normalna, w której atrybuty złożone rozbija się na atrybuty atomowe:',
        'options': [
            'Trzecia',
            'BCNF',
            'Czwarta',
            'Pierwsza',
            'Druga',
            'Piąta'
        ],
        'correctAnswer': ['Pierwsza']
    },
    {
        'question': 'Najniższa postać normalna, w której nie ma przechodnich zależności funkcyjnych:',
        'options': [
            'BCNF',
            'Druga',
            'Piąta',
            'Pierwsza',
            'Trzecia',
            'Czwarta'
        ],
        'correctAnswer': ['Trzecia']
    },
    {
        'question': 'Najniższa postać normalna, w której każda nietrywialna zależność funkcyjna jest superkluczem:',
        'options': [
            'Pierwsza',
            'Druga',
            'Czwarta',
            'Piąta',
            'BCNF',
            'Trzecia'
        ],
        'correctAnswer': ['BCNF']
    },
    {
        'question': 'Typy anomalii w bazach danych:',
        'options': [
            'Redundancja danych',
            'Anomalia usuwania',
            'Anomalia zależności funkcyjnej',
            'Anomalia dekompozycji',
            'Anomalia wstawiania',
            'Anomalia modyfikacji'
        ],
        'correctAnswer': ['Redundancja danych', 'Anomalia usuwania', 'Anomalia wstawiania', 'Anomalia modyfikacji']
    },
    {
        'question': 'Które stwierdzenia dotyczące operacji wejścia/wyjścia są PRAWDZIWE?',
        'options': [
            '1GB pamięci RAM jest droższy niż 1GB dysku SSD',
            'W przypadku awarii zasilania dane na dysku nie są kasowane',
            'Sekwencyjny odczyt danych z dysku HDD jest znacznie szybszy niż losowy',
            'Dane z pamięci RAM po utracie zasilania są przechowywane w buforze',
            'W serwerowniach używa się przeważnie dysków HDD'
        ],
        'correctAnswer': ['1GB pamięci RAM jest droższy niż 1GB dysku SSD', 'W przypadku awarii zasilania dane na dysku nie są kasowane', 'Sekwencyjny odczyt danych z dysku HDD jest znacznie szybszy niż losowy', 'W serwerowniach używa się przeważnie dysków HDD']
    },
    {
        'question': 'Które stwierdzenia dotyczące RAID są PRAWDZIWE?',
        'options': [
            'RAID 0 ma dwa razy szybszy odczyt i zapis niż pojedynczy dysk',
            'Odtwarzanie danych po awarii jednego dysku w RAID 5 zajmuje dużo czasu',
            'RAID 1 nie jest odporny na awarie dysku',
            'RAID 6 potrzebuje więcej dysków niż RAID 5 do przechowania tej samej ilości danych',
            'W RAID 5 mogą ulec awarii jednocześnie dwa dyski bez ryzyka utraty danych'
        ],
        'correctAnswer': ['RAID 0 ma dwa razy szybszy odczyt i zapis niż pojedynczy dysk', 'Odtwarzanie danych po awarii jednego dysku w RAID 5 zajmuje dużo czasu', 'RAID 6 potrzebuje więcej dysków niż RAID 5 do przechowania tej samej ilości danych']
    },
    {
        'question': 'Które stwierdzenia dotyczące transakcji są PRAWDZIWE?',
        'options': [
            'Zapewniają wielodostęp do baz danych',
            'Pozwalają przetrwać bazie danych awarię bez ryzyka niespójności danych',
            'Przyśpieszają działanie bazy danych',
            'Gwarantują, że nieuprawnieni użytkownicy nie mają dostępu do danych',
            'Mogą składać się tylko z jednego zapytania'
        ],
        'correctAnswer': ['Zapewniają wielodostęp do baz danych', 'Pozwalają przetrwać bazie danych awarię bez ryzyka niespójności danych', 'Mogą składać się tylko z jednego zapytania']
    },
    {
        'question': 'Awaria w trakcie transakcji spowoduje:',
        'options': [
            'Wynik transakcji zostanie zapisany na dysku jeśli wykonany był commit',
            'Wynik transakcji zostanie zapisany na dysku bez względu na jej stan jeśli operacje były zapisywane w logu',
            'Log musi być zapisany na dysk przed przesłaniem danych na dysk'
        ],
        'correctAnswer': ['Wynik transakcji zostanie zapisany na dysku jeśli wykonany był commit', 'Log musi być zapisany na dysk przed przesłaniem danych na dysk']
    },
    {
        'question': 'Harmonogram szeregowalny (serializable) oznacza, że:',
        'options': [
            'Nie można wykonać żadnej transakcji, występuje zakleszczenie',
            'Można wykonać równolegle wiele transakcji',
            'Każda transakcja musi być wykonana szeregowo, jedna po drugiej'
        ],
        'correctAnswer': ['Można wykonać równolegle wiele transakcji']
    },
    {
        'question': 'Które stwierdzenia dotyczące konfliktów są PRAWDZIWE?',
        'options': [
            'Konflikt RW powoduje, że kolejny odczyt danych jest niespójny',
            'Baza danych zawsze musi być tak ustawiona, aby konflikty nie były możliwe',
            'Konflikt RW powoduje, że nie można utworzyć harmonogramu serializowanego',
            'Konflikt WR spowoduje, że w przypadku wycofania transakcji odczyt danych będzie niespójny'
        ],
        'correctAnswer': ['Konflikt RW powoduje, że kolejny odczyt danych jest niespójny', 'Konflikt RW powoduje, że nie można utworzyć harmonogramu serializowanego', 'Konflikt WR spowoduje, że w przypadku wycofania transakcji odczyt danych będzie niespójny']
    },
    {
        'question': 'Które stwierdzenia dotyczące poziomów izolacji są PRAWDZIWE?',
        'options': [
            'Tryb read committed oznacza, że brudny odczyt nie jest możliwy',
            'Tryb read uncommitted jest najbardziej bezpiecznym poziomem izolacji',
            'Tryb repeatable read oznacza, że mogą wystąpić fantomy',
            'Tryb serializable oznacza, że żadne konflikty nie są akceptowane'
        ],
        'correctAnswer': ['Tryb read committed oznacza, że brudny odczyt nie jest możliwy', 'Tryb repeatable read oznacza, że mogą wystąpić fantomy', 'Tryb serializable oznacza, że żadne konflikty nie są akceptowane']
    },
    {
        'question': 'Jeśli skierowany graf konfliktów transakcji jest acykliczny, to:',
        'options': [
            'Można utworzyć harmonogram serializowalny',
            'Nie występują konflikty',
            'Musimy dodać transakcje do grafu'
        ],
        'correctAnswer': ['Można utworzyć harmonogram serializowalny']
    },
    {
        'question': 'Zakładanie blokad wg algorytmu blokowania dwufazowego (2PL) oznacza, że:',
        'options': [
            'Graf zależności transakcji musi mieć przynajmniej jeden cykl',
            'Utworzony harmonogram będzie serializowalny',
            'Muszą być założone wszystkie blokady przed zdjęciem pierwszej z blokad'
        ],
        'correctAnswer': ['Utworzony harmonogram będzie serializowalny', 'Muszą być założone wszystkie blokady przed zdjęciem pierwszej z blokad']
    },
    {
        'question': 'Mechanizmami zapewniającymi kontrolę dostępu są:',
        'options': [
            'Discretionary Access Control (DAC)',
            'Database Administrator Access Control',
            'Server Access Control',
            'Role-Based Access Control (RBAC)',
            'Mandatory Access Control (MAC)'
        ],
        'correctAnswer': ['Discretionary Access Control (DAC)', 'Role-Based Access Control (RBAC)', 'Mandatory Access Control (MAC)']
    },
    {
        'question': 'WITH GRANT OPTION oznacza, że:',
        'options': [
            'Użytkownik może nie korzystać ze swoich uprawnień',
            'Nadajemy użytkownikowi takie same uprawnienia jakie sami posiadamy',
            'Dajemy użytkownikowi prawo przekazywania dalej uprawnień',
            'Zabieramy użytkownikowi uprawnienia do zasobu'
        ],
        'correctAnswer': ['Dajemy użytkownikowi prawo przekazywania dalej uprawnień']
    },
    {
        'question': 'SQL injection:',
        'options': [
            'Jest to jedna z technik uzyskiwania nieuprawnionego dostępu do danych',
            'Jest to tryb dostępu administratora do bazy',
            'Jest to jeden z trybów pracy bazy danych'
        ],
        'correctAnswer': ['Jest to jedna z technik uzyskiwania nieuprawnionego dostępu do danych']
    },
    {
        'question': 'Elementami XML\'a są:',
        'options': [
            'Text',
            'Comment',
            'Attribute',
            'Element',
            'Namespace'
        ],
        'correctAnswer': ['Text', 'Comment', 'Attribute', 'Element', 'Namespace']
    },
    {
        'question': 'XQuery jest:',
        'options': [
            'Częścią pliku XML',
            'Językiem zapytań dla XML',
            'Strukturą danych w XML'
        ],
        'correctAnswer': ['Językiem zapytań dla XML']
    },
    {
        'question': 'Które stwierdzenia dotyczące optymalizacji planu algebry relacji są PRAWDZIWE?',
        'options': [
            'Selekcja powinna być przesunięta w dół drzewa',
            'Nie wolno zmienić kolejności operacji łączenia (join)',
            'Istnieje tylko jedno drzewo przedstawiające plan algebry relacji',
            'Projekcja powinna być przesunięta w dół drzewa'
        ],
        'correctAnswer': ['Selekcja powinna być przesunięta w dół drzewa', 'Projekcja powinna być przesunięta w dół drzewa']
    },
    {
        'question': 'Operacja projekcji w algebrze relacji oznacza:',
        'options': [
            'Połączenie rekordów z dwóch tabel',
            'Eliminację zbędnych kolumn',
            'Zwrócenie rekordów, które spełniają podane warunki',
            'Usunięcie duplikatów'
        ],
        'correctAnswer': ['Eliminację zbędnych kolumn', 'Usunięcie duplikatów']
    },
    {
        'question': 'Przepakowanie w algorytmie External Merge Sort:',
        'options': [
            'Jeśli dane są posortowane to eliminujemy etap Merge',
            'Można zawsze zastosować, bez względu na ułożenie danych na dysku',
            'Zawsze przyspiesza działanie algorytmu'
        ],
        'correctAnswer': ['Można zawsze zastosować, bez względu na ułożenie danych na dysku']
    },
    {
        'question': 'Które stwierdzenia dotyczące indeksów są PRAWDZIWE?',
        'options': [
            'Indeksy spowalniają operacje aktualizacji danych',
            'Na kolumnie może być założonych wiele indeksów',
            'Można założyć wiele indeksów powiązanych (clustered) w tabeli',
            'W bazie danych wszystkie indeksy muszą być przechowywane w pamięci RAM'
        ],
        'correctAnswer': ['Indeksy spowalniają operacje aktualizacji danych']
    },
    {
        'question': 'Które algorytmy łączenia wymagają ~3(P(R)+P(S)) + OUT operacji?',
        'options': [
            'Sort-Merge Join (SMJ)',
            'Block Nested Loop Join (BNLJ)',
            'Nested Loop Join (NLJ)',
            'Hash Join (HJ)',
            'Index Nested Loop Join (INLJ)'
        ],
        'correctAnswer': ['Sort-Merge Join (SMJ)', 'Hash Join (HJ)']
    },
    {
        'question': 'Algorytm Index Nested Loop Join (INLJ):',
        'options': [
            'We wzorze P(R) + T(R)*L + OUT, L oznacza liczbę operacji we/wy',
            'Nie musimy wykonywać iloczynu kartezjańskiego',
            'Jest wolniejszy niż algorytm Nested Loop Join (NLJ)'
        ],
        'correctAnswer': ['We wzorze P(R) + T(R)*L + OUT, L oznacza liczbę operacji we/wy', 'Nie musimy wykonywać iloczynu kartezjańskiego']
    },
    {
        'question': 'Do zaindeksowania 1TB danych potrzebne jest B+ drzewo o ___ poziomach:',
        'options': [],
        'correctAnswer': ['4']
    },
    {
        'question': 'Kolejność zapisu w komendzie SELECT:',
        'options': [
            '1. SELECT',
            '2. FROM',
            '3. WHERE',
            '4. GROUP BY',
            '5. HAVING',
            '6. ORDER BY'
        ],
        'correctAnswer': ['1. SELECT', '2. FROM', '3. WHERE', '4. GROUP BY', '5. HAVING', '6. ORDER BY']
    },
    {
        'question': 'Kolejność przetwarzania w zapytaniu SELECT:',
        'options': [
            '1. FROM',
            '2. WHERE',
            '3. GROUP BY',
            '4. HAVING',
            '5. SELECT',
            '6. ORDER BY'
        ],
        'correctAnswer': ['1. FROM', '2. WHERE', '3. GROUP BY', '4. HAVING', '5. SELECT', '6. ORDER BY']
    },
    {
        'question': 'Wybierz stwierdzenia, które są PRAWDZIWE w kontekście ról (Role-Based Access Control):',
        'options': [
            'można przypisać tylko na etapie tworzenia nowego użytkownika',
            'Uprawnienia można przypisać do roli',
            'Role można przypisać do wielu użytkowników',
            'Użytkownik może być przypisany tylko do jednej roli'
        ],
        'correctAnswer': ['Uprawnienia można przypisać do roli', 'Role można przypisać do wielu użytkowników']
    },
    {
        'question': 'Wybierz stwierdzenia, które są PRAWDZIWE w kontekście danych półstrukturalnych (semistructural):',
        'options': [
            'Dobrze nadają się do przechowywania danych rzadkich',
            'Struktura danych może ulegać zmianie w czasie',
            'Struktura danych musi dać się przekształcić do relacyjnego modelu',
            'Obowiązkowo należy zdefiniować schemat danych przed użyciem'
        ],
        'correctAnswer': ['Dobrze nadają się do przechowywania danych rzadkich', 'Struktura danych może ulegać zmianie w czasie']
    },
    {
        'question': 'Wybierz stwierdzenia, które są PRAWDZIWE w kontekście DENORMALIZACJI bazy danych:',
        'options': [
            'Zmniejszenie liczby łączeń tabel (JOIN)',
            'Ostatni etap normalizacji',
            'Musi być wykonana dla każdej relacyjnej bazy',
            'Zwiększenie wydajności bazy'
        ],
        'correctAnswer': ['Zmniejszenie liczby łączeń tabel (JOIN)', 'Zwiększenie wydajności bazy']
    },
    {
        'question': 'Wybierz stwierdzenia, które są PRAWDZIWE w kontekście JSON:',
        'options': [
            'Nie zawiera tagów zamykających',
            'Obsługiwany tylko przez JavaScript',
            'Nie obsługuje tablic',
            'Łatwiejszy do parsowania od XML'
        ],
        'correctAnswer': ['Nie zawiera tagów zamykających', 'Łatwiejszy do parsowania od XML']
    },
    {
        'question': 'W XPath:',
        'options': [
            'można definiować zmienne.',
            'symbol * oznacza, że możemy zagłębić się w drzewie XML na dowolną liczbę poziomów.',
            'można zwrócić fragment XML lub zbiór wartości.',
            'umożliwia pobranie z XML danych.',
            'występują pętle.'
        ],
        'correctAnswer': ['symbol * oznacza, że możemy zagłębić się w drzewie XML na dowolną liczbę poziomów.', 'można zwrócić fragment XML lub zbiór wartości.', 'umożliwia pobranie z XML danych.']
    }
]