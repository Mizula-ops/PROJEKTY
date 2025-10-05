#include <iostream>
#include <string>
#include <random>
#include <vector>
#include <cstdlib>
#include <ctime>
#include "header.h"
using namespace std;

int spotkales_wroga(string nazwa)
{
    int wybor_ucieczki;
    cout << "Spotkales " << nazwa << endl;
    cout << "Walcz (nacisnij 1)" << endl;
    cout << "Uciekaj (nacisnij 2)" << endl;
    cout << "Twoj wybor: " << endl;
    cin >> wybor_ucieczki;

    system("cls");
    return wybor_ucieczki;
}
int main() {
    int wybor_skrzynia = 0;
    int wybor, wybor_klasy, wybor_walka, wybor_ucieczki,  wybor_leczy, wybor_punkty;
    int postac_stworzona = 0;
    int max = 5;
    string nazwa, imie;
    srand(time(0));
    vector<Wrog> wrogowie = {
        Wrog("Maly gnom", 60, "Maly bagnisty goblin", "Rzuca kamieniem", 1),
        Wrog("Lucznik gnom", 60, "Strzela z luku", "Strzal", 10),
        Wrog("Sredni gnom", 80, "Posiada srednie kamienie", "Rzuca dosyc sporym kamieniem", 20),


    };
    vector<Wrog> wrogowie2 = {
        Wrog("Szaman gnom", 100, "Grozny magik", "Atakuje wodnym pociskiem", 40),
        Wrog("Krysztalowy gnom", 100, "Posiada krysztalowe kamienie", "Rzuca krysztalowym kamieniem", 40),
        Wrog("Duzy gnom", 150, "Posiada duze kamienie", "Rzuca bardzo duzym kamieniem", 30),

    };
    vector<Skarb> skarby = {
    Skarb("Kamien","Mozna nim rzucic",35,0),
    Skarb("Sredni Kamien","Mozna nim rzucic",45,0),
    Skarb("Spory Kamien","Mozna nim rzucic",50,0),
    Skarb("Potezny Kamien","Mozna nim rzucic",100,0),
    Skarb("Kamien regenerujacy","Mozna go zjesc",20,1),
    Skarb("Kamien leczacy","Mozna go zjesc",30,1),
    Skarb("Kamien ARCHANIOLA","Mozna go zjesc",100,1)
    };
    ObiektPasywny krzeslo("Krzeslo", 30, "To krzeslo jest", 1, 1);
    Gracz gracz("", 0, "", "", 0, "", 0);
    SkrzyniaSkarbow<Skarb> skrzynia;
    int dlugosc = wrogowie.size();
    while (true) {

        cout << endl;

        cout << "GRA GNOMY I KAMIENIE" << endl;
        cout << "1. Stworz postac" << endl;
        cout << "2. Odwiedz siedlisko malych gnomow" << endl;
        cout << "3. Odwiedz krysztalowa jaskinie" << endl;
        cout << "4. Wyswietl skrzynie skarbu" << endl;
        cout << "5. Wyswietl statystyki gracza" << endl;
        cout << "6. Wyswietl rodzaje gnomow" << endl;
        cout << "7. Wyjdz" << endl;
        cout << "Twoj wybor: ";
        cin >> wybor;

        switch (wybor) {
        case 1:
            system("cls");
            if (postac_stworzona == 0) {
                cout << "Podaj imie" << endl;
                cin >> imie;
                system("cls");
                cout << "Wybierz klase" << endl;
                cout << "1. Czarodziej" << endl;
                cout << "2. Rycerz" << endl;
                cout << "3. Lucznik" << endl;
                cout << "4.Wyjdz" << endl;
                cout << "Twoj wybor" << endl;
                cin >> wybor_klasy;
                if (wybor_klasy == 1) gracz = Gracz(imie, 100, "Czarodziej uzywa swojej szybkiej rozdzki", "Rozdzka", 30, "Czarodziej", 0);
                else if (wybor_klasy == 2) gracz = Gracz(imie, 120, "Wytrzymaly Rycerz idzie pomoc ksiezniczce", "Mieczor", 25, "Rycerz", 0);
                else if (wybor_klasy == 3) gracz = Gracz(imie, 100, "Szybki Elfi Lucznik", "Luk", 25, "Lucznik", 0);
                else if (wybor_klasy == 4) break;
                postac_stworzona++;
                skrzynia.dodajPrzedmiot(skarby[0]);
                skrzynia.dodajPrzedmiot(skarby[4]);

                system("cls");


                break;
            }
            else
            {
                cout << "Gracz jest juz stworzony" << endl;
                break;
            }

        case 2:
        {


            cout << "Witaj w siedlisku malych gnomow" << endl;

            int wrog = rand() % (wrogowie.size());
            string imie_wroga = wrogowie[wrog].getImie();
            wybor_ucieczki = spotkales_wroga(imie_wroga);
            if (wybor_ucieczki == 1)
            {
                int zycie_wroga = wrogowie[wrog].getPunktyZycia();
                int zycie_gracza = gracz.getPunktyZycia();
                while (zycie_wroga >= 1)
                {
                    cout << "Co robisz? " << endl;
                    cout << "1. Atakuj" << endl;
                    cout << "2. Uzyj cos ze skrzyni skarbu" << endl;
                    cout << "3. Nic nie robi" << endl;
                    cout << "Twoj wybor" << endl;
                    cin >> wybor_walka;
                    switch (wybor_walka) {
                    case 1:

                        cout << "Zaatakowales zadales " << gracz.getZadawaneObrazenia() << " obrazen" << endl;
                        gracz.zadajObrazenia(wrogowie[wrog]);
                        cout << "Wrog ma " << wrogowie[wrog].getPunktyZycia() << " punktow zycia" << endl;;
                        zycie_wroga = wrogowie[wrog].getPunktyZycia();
                        if (zycie_wroga <= 0)
                        {
                            cout << "Pokonales wroga" << endl;
                            gracz.kill();
                            int skarb = rand() % (skarby.size());
                            cout << "Gratulacje zdobyles: " << skarby[skarb].getNazwa() << endl;
                            int pojemnosc = (skrzynia.czyPelna(max) ? 1 : 0);
                            if (pojemnosc == 0) skrzynia.dodajPrzedmiot(skarby[skarb]);
                            else
                            {
                                int wyb;
                                cout << "UPS! Nie masz miejsca czy chcesz usunac jakis przedmiot?" << endl;
                                cout << "Tak (Wybierz 1)" << endl;
                                cout << "Nie (Wybierz 2)" << endl;
                                cin >> wyb;
                                if (wyb == 1)
                                {
                                    system("cls");
                                    skrzynia.wyswietlPrzedmioty();
                                    int usun;
                                    cout << "O jakim indeksie usunac przedmiot? " << endl;
                                    cout << "Twoj wybor" << endl;
                                    cin >> usun;
                                    skrzynia.usunPrzedmiot(usun);
                                    skrzynia.dodajPrzedmiot(skarby[skarb]);
                                    cout << "Pomyslnie usunieto i dodano nowy przedmiot" << endl;
                                }
                                else
                                    break;
                            }
                            break;
                        }
                        cout << "Wrog zaatakowal zadal " << wrogowie[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                        wrogowie[wrog].zadajObrazenia(gracz);
                        cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                        zycie_gracza = gracz.getPunktyZycia();
                        if (zycie_gracza <= 0)
                        {
                            cout << "Umarles" << endl;
                            return 0;
                        }
                        break;
                    case 2:
                    {


                        system("cls");
                        int przedmiot;
                        skrzynia.wyswietlPrzedmioty();
                        cout << "O jakim indeksie wybrac przedmiot? " << endl;
                        cout << "Twoj wybor" << endl;
                        cin >> przedmiot;
                        const Skarb& pierwszyPrzedmiot = skrzynia.pobierzPrzedmiot(przedmiot);
                        wybor_leczy = pierwszyPrzedmiot.getczy_leczy();
                        cout << wybor_leczy;
                        if (wybor_leczy == 0)
                        {
                            cout << "Zaatakowales zadales " << pierwszyPrzedmiot.getPunkty() << " obrazen" << endl;
                            pierwszyPrzedmiot.zadajObrazenia(wrogowie[wrog]);
                            cout << "Wrog ma " << wrogowie[wrog].getPunktyZycia() << " punktow zycia" << endl;;
                            zycie_wroga = wrogowie[wrog].getPunktyZycia();
                            if (zycie_wroga <= 0)
                            {
                                cout << "Pokonales wroga" << endl;
                                gracz.kill();
                                int skarb = rand() % (skarby.size());
                                cout << "Gratulacje zdobyles: " << skarby[skarb].getNazwa() << endl;
                                int pojemnosc = (skrzynia.czyPelna(max) ? 1 : 0);
                                if (pojemnosc == 0) skrzynia.dodajPrzedmiot(skarby[skarb]);
                                else
                                {
                                    int wyb;
                                    cout << "UPS! Nie masz miejsca czy chcesz usunac jakis przedmiot?" << endl;
                                    cout << "Tak (Wybierz 1)" << endl;
                                    cout << "Nie (Wybierz 2)" << endl;
                                    cin >> wyb;
                                    if (wyb == 1)
                                    {
                                        system("cls");
                                        skrzynia.wyswietlPrzedmioty();
                                        int usun;
                                        cout << "O jakim indeksie usunac przedmiot? " << endl;
                                        cout << "Twoj wybor" << endl;
                                        cin >> usun;
                                        skrzynia.usunPrzedmiot(usun);
                                        skrzynia.dodajPrzedmiot(skarby[skarb]);
                                        cout << "Pomyslnie usunieto i dodano nowy przedmiot" << endl;
                                    }
                                    else
                                        break;
                                }

                                break;
                            }
                            cout << "Wrog zaatakowal zadal " << wrogowie[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                            wrogowie[wrog].zadajObrazenia(gracz);
                            cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                            zycie_gracza = gracz.getPunktyZycia();
                            if (zycie_gracza <= 0)
                            {
                                cout << "Umarles" << endl;
                                return 0;
                            }
                        }
                        else if (wybor_leczy == 1)
                        {
                            pierwszyPrzedmiot.ulecz(gracz);
                            cout << "Uleczyles sie masz " << gracz.getPunktyZycia() << " punktow zdrowia" << endl;
                            cout << "Wrog ma " << wrogowie[wrog].getPunktyZycia() << " punktow zycia" << endl;;
                            cout << "Wrog zaatakowal zadal " << wrogowie[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                            wrogowie[wrog].zadajObrazenia(gracz);
                            cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                            zycie_gracza = gracz.getPunktyZycia();
                            if (zycie_gracza <= 0)
                            {
                                cout << "Umarles" << endl;
                                return 0;
                            }
                        }
                    }
                    break;
                    case 3:
                        int wybor_ucieczki2 = spotkales_wroga("krzeslo");
                        if (wybor_ucieczki2 == 1)
                        {
                            int zycie_krzesla = krzeslo.getPunktyZycia();

                            while (zycie_krzesla >= 1)
                            {
                                cout << "Zaatakowales zadales " << gracz.getZadawaneObrazenia() << " obrazen" << endl;
                                gracz.zadajObrazenia(krzeslo);
                                cout << "Wrog ma " << krzeslo.getPunktyZycia() << " punktow zycia" << endl;;
                                zycie_krzesla = krzeslo.getPunktyZycia();
                                if (zycie_krzesla <= 0)
                                {
                                    cout << "Pokonales przeszkode" << endl;
                                    break;
                                }
                                cout << "Wrog zaatakowal zadal " << wrogowie[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                                wrogowie[wrog].zadajObrazenia(gracz);
                                cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                                zycie_gracza = gracz.getPunktyZycia();
                                if (zycie_gracza <= 0)
                                {
                                    cout << "Umarles" << endl;
                                    return 0;
                                }
                            }
                        }
                        if (wybor_ucieczki2 == 2) break;
                        break;
                    }
                }
            }
            else if (wybor_ucieczki == 2) break;
        }
        break;
        case 3:
        {
            cout << "Witaj w krysztalowej jaskini" << endl;

            int wrog = rand() % (wrogowie2.size());
            string imie_wroga = wrogowie2[wrog].getImie();
            wybor_ucieczki = spotkales_wroga(imie_wroga);
            if (wybor_ucieczki == 1)
            {
                int zycie_wroga = wrogowie2[wrog].getPunktyZycia();
                int zycie_gracza = gracz.getPunktyZycia();
                while (zycie_wroga >= 1)
                {
                    cout << "Co robisz? " << endl;
                    cout << "1. Atakuj" << endl;
                    cout << "2. Uzyj cos ze skrzyni skarbu" << endl;
                    cout << "3. Nic nie robi" << endl;
                    cout << "Twoj wybor" << endl;
                    cin >> wybor_walka;
                    switch (wybor_walka) {
                    case 1:

                        cout << "Zaatakowales zadales " << gracz.getZadawaneObrazenia() << " obrazen" << endl;
                        gracz.zadajObrazenia(wrogowie2[wrog]);
                        cout << "Wrog ma " << wrogowie[wrog].getPunktyZycia() << " punktow zycia" << endl;;
                        zycie_wroga = wrogowie2[wrog].getPunktyZycia();
                        if (zycie_wroga <= 0)
                        {
                            cout << "Pokonales wroga" << endl;
                            gracz.kill();
                            int skarb = rand() % (skarby.size());
                            cout << "Gratulacje zdobyles: " << skarby[skarb].getNazwa() << endl;
                            int pojemnosc = (skrzynia.czyPelna(max) ? 1 : 0);
                            if (pojemnosc == 0) skrzynia.dodajPrzedmiot(skarby[skarb]);
                            else
                            {
                                int wyb;
                                cout << "UPS! Nie masz miejsca czy chcesz usunac jakis przedmiot?" << endl;
                                cout << "Tak (Wybierz 1)" << endl;
                                cout << "Nie (Wybierz 2)" << endl;
                                cin >> wyb;
                                if (wyb == 1)
                                {
                                    system("cls");
                                    skrzynia.wyswietlPrzedmioty();
                                    int usun;
                                    cout << "O jakim indeksie usunac przedmiot? " << endl;
                                    cout << "Twoj wybor" << endl;
                                    cin >> usun;
                                    skrzynia.usunPrzedmiot(usun);
                                    skrzynia.dodajPrzedmiot(skarby[skarb]);
                                    cout << "Pomyslnie usunieto i dodano nowy przedmiot" << endl;
                                }
                                else
                                    break;
                            }
                            break;
                        }
                        cout << "Wrog zaatakowal zadal " << wrogowie2[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                        wrogowie2[wrog].zadajObrazenia(gracz);
                        cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                        zycie_gracza = gracz.getPunktyZycia();
                        if (zycie_gracza <= 0)
                        {
                            cout << "Umarles" << endl;
                            return 0;
                        }
                        break;
                    case 2:
                    {


                        system("cls");
                        int przedmiot;
                        skrzynia.wyswietlPrzedmioty();
                        cout << "O jakim indeksie wybrac przedmiot? " << endl;
                        cout << "Twoj wybor" << endl;
                        cin >> przedmiot;
                        const Skarb& pierwszyPrzedmiot = skrzynia.pobierzPrzedmiot(przedmiot);
                        wybor_leczy = pierwszyPrzedmiot.getczy_leczy();
                        cout << wybor_leczy;
                        if (wybor_leczy == 0)
                        {
                            cout << "Zaatakowales zadales " << pierwszyPrzedmiot.getPunkty() << " obrazen" << endl;
                            pierwszyPrzedmiot.zadajObrazenia(wrogowie[wrog]);
                            cout << "Wrog ma " << wrogowie[wrog].getPunktyZycia() << " punktow zycia" << endl;;
                            zycie_wroga = wrogowie[wrog].getPunktyZycia();
                            if (zycie_wroga <= 0)
                            {
                                cout << "Pokonales wroga" << endl;
                                gracz.kill();
                                int skarb = rand() % (skarby.size());
                                cout << "Gratulacje zdobyles: " << skarby[skarb].getNazwa() << endl;
                                int pojemnosc = (skrzynia.czyPelna(max) ? 1 : 0);
                                if (pojemnosc == 0) skrzynia.dodajPrzedmiot(skarby[skarb]);
                                else
                                {
                                    int wyb;
                                    cout << "UPS! Nie masz miejsca czy chcesz usunac jakis przedmiot?" << endl;
                                    cout << "Tak (Wybierz 1)" << endl;
                                    cout << "Nie (Wybierz 2)" << endl;
                                    cin >> wyb;
                                    if (wyb == 1)
                                    {
                                        system("cls");
                                        skrzynia.wyswietlPrzedmioty();
                                        int usun;
                                        cout << "O jakim indeksie usunac przedmiot? " << endl;
                                        cout << "Twoj wybor" << endl;
                                        cin >> usun;
                                        skrzynia.usunPrzedmiot(usun);
                                        skrzynia.dodajPrzedmiot(skarby[skarb]);
                                        cout << "Pomyslnie usunieto i dodano nowy przedmiot" << endl;
                                    }
                                    else
                                        break;
                                }

                                break;
                            }
                            cout << "Wrog zaatakowal zadal " << wrogowie2[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                            wrogowie2[wrog].zadajObrazenia(gracz);
                            cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                            zycie_gracza = gracz.getPunktyZycia();
                            if (zycie_gracza <= 0)
                            {
                                cout << "Umarles" << endl;
                                return 0;
                            }
                        }
                        else if (wybor_leczy == 1)
                        {
                            pierwszyPrzedmiot.ulecz(gracz);
                            cout << "Uleczyles sie masz " << gracz.getPunktyZycia() << " punktow zdrowia" << endl;
                            cout << "Wrog ma " << wrogowie2[wrog].getPunktyZycia() << " punktow zycia" << endl;;
                            cout << "Wrog zaatakowal zadal " << wrogowie2[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                            wrogowie[wrog].zadajObrazenia(gracz);
                            cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                            zycie_gracza = gracz.getPunktyZycia();
                            if (zycie_gracza <= 0)
                            {
                                cout << "Umarles" << endl;
                                return 0;
                            }
                        }
                    }
                    break;
                    case 3:
                        cout << "Wrog zaatakowal zadal " << wrogowie2[wrog].getZadawaneObrazenia() << " obrazen" << endl;
                        wrogowie2[wrog].zadajObrazenia(gracz);
                        cout << "Zostalo ci " << gracz.getPunktyZycia() << " punktow zycia" << endl;
                        zycie_gracza = gracz.getPunktyZycia();
                        if (zycie_gracza <= 0)
                        {
                            cout << "Umarles" << endl;
                            return 0;
                        }
                        break;
                    }
                }
            }
            else if (wybor_ucieczki == 2) break;
        }

        break;
        case 4:
            //int wybor_skrzynia = 0;
            while (wybor_skrzynia != 4)
            {
                skrzynia.wyswietlPrzedmioty();
                cout << "Co chcesz zrobic" << endl;
                cout << "1.Czy skrzynia jest pelna?" << endl;
                cout << "2.Usun przedmioty ze skrzyni" << endl;
                cout << "3.Ile jest przedmiotow w skrzyni?" << endl;
                cout << "4.Wyjdz" << endl;
                cin >> wybor_skrzynia;
                switch (wybor_skrzynia) {
                case 1:
                    system("cls");
                    cout << "Czy skrzynia jest pelna? " << (skrzynia.czyPelna(max) ? "Tak" : "Nie") << endl;
                    break;
                case 2:
                    int usun;
                    system("cls");
                    cout << "O jakim indeksie usunac przedmiot? " << endl;
                    cout << "Twoj wybor" << endl;
                    cin >> usun;
                    skrzynia.usunPrzedmiot(usun);
                    break;
                case 3:
                    system("cls");
                    cout << "Liczba przedmiotow w skrzyni: " << skrzynia.liczbaPrzedmiotow() << endl;
                    break;
                }
            }
            break;
        case 5:
            gracz.wyswietl();
            break;
        case 6:

            krzeslo.wyswietl();

            for (int i = 0;i <= dlugosc;i++)
            {
                wrogowie[i].wyswietl();
                cout << endl;
                wrogowie2[i].wyswietl();
                cout << endl;

            }


            break;

        default:
            cout << "Nieprawidłowy wybór, spróbuj ponownie." << endl;
            break;
        }
    }
    return 0;
}
