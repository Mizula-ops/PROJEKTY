#ifndef HEADER_H_INCLUDED
#define HEADER_H_INCLUDED

#include <iostream>
#include <vector>
#include <string>


using namespace std;

class ObiektGry {
protected:
    string imie;
    string opis;
    int punktyZycia;
public:

    ObiektGry(string im, int pz, string op)
        : imie(im), punktyZycia(pz), opis(op) {}

    virtual ~ObiektGry() {}

    virtual void wyswietl() const = 0;
    int getPunktyZycia() const {
        return punktyZycia;
    }
    string getImie() const {
        return imie;
    }
    friend class Wrog;
    friend class Skarb;
    friend class Gracz;
};

class Gracz;
class Wrog : public ObiektGry {
private:
    string bron;
    int zadawaneObrazenia;

public:
    Wrog(string im, int pz, string op, string bron, int obrazenia)
        : ObiektGry(im, pz, op), bron(bron), zadawaneObrazenia(obrazenia) {}

    void wyswietl() const override {
        cout << "Nazwa: " << imie << endl;
        cout << "Opis: " << opis << endl;
        cout << "Punkty Zycia: " << punktyZycia << endl;
        cout << "Bron: " << bron << endl;
        cout << "Obrazenia: " << zadawaneObrazenia << endl;
    }
    void zadajObrazenia(ObiektGry& gracz) {
        gracz.punktyZycia -= this->zadawaneObrazenia;
    }
    int getZadawaneObrazenia() const {
        return zadawaneObrazenia;
    }
    friend class Gracz;
    friend class Skarb;

};
class Gracz : public ObiektGry {
private:
    string wymaganyPrzedmiot;
    string klasa;
    int kille;
    int zadawaneObrazenia;

public:
    Gracz(string im, int pz, string op, string wymPrzedmiot, int obrazenia, string klasa, int loz)
        : ObiektGry(im, pz, op), wymaganyPrzedmiot(wymPrzedmiot), zadawaneObrazenia(obrazenia), klasa(klasa), kille(loz) {}

    void wyswietl() const override {
        cout <<                                                  "TWOJ BOHATER" << endl;
        cout <<                                                  "Klasa: " << klasa << endl;
        cout <<                                                  "Nazwa: " << imie << endl;
        cout <<                                                  "Opis: " << opis << endl;
        cout <<                                                  "Punkty Zycia: " << punktyZycia << endl;
        cout <<                                                   "Bron: " << wymaganyPrzedmiot << endl;
        cout <<                                                  "Obrazenia: " << zadawaneObrazenia << endl;
        cout <<                                                  "Pokonane gnomy " << kille << endl;
        cout<<endl;
    }

    int getZadawaneObrazenia() const {
        return zadawaneObrazenia;
    }

    void zadajObrazenia(Wrog& wrog) {
        wrog.punktyZycia -= this->zadawaneObrazenia;
    }
    void zadajObrazenia(ObiektGry& wrog) {
        wrog.punktyZycia -= this->zadawaneObrazenia;
    }
    void kill() {
        this->kille++;
    }
};

class ObiektPasywny : public ObiektGry {
private:
    int wielkoscOporu;
    int wielkoscPrzeszkody;

public:
    ObiektPasywny(string im, int pz, string op, int opor, int przeszkoda)
        : ObiektGry(im, pz, op), wielkoscOporu(opor), wielkoscPrzeszkody(przeszkoda) {}

    void wyswietl() const override {
        cout << "Obiekt Pasywny: " << opis<<endl;
        cout<< ", Punkty Zycia: " << punktyZycia<<endl;
        cout<< ", Wielkosc Oporu: " << wielkoscOporu<<endl;
        cout<< ", Wielkosc Przeszkody: " << wielkoscPrzeszkody <<endl;
        cout<<endl;
    }
};



class Skarb {
private:
    string nazwa;
    string opis;
    int punkty;
    int czy_leczy;

public:
    Skarb(string n, string o, int p, int c) : nazwa(n), opis(o), punkty(p), czy_leczy(c) {}

    friend std::ostream& operator<<(std::ostream& os, const Skarb& skarb) {
        os << "Skarb: " << skarb.nazwa << ", Opis: " << skarb.opis << ", Punkty: " << skarb.punkty;
        return os;
    }

    string getNazwa() const {
        return nazwa;
    }

    string getOpis() const {
        return opis;
    }

    int getPunkty() const {
        return punkty;
    }
     int getczy_leczy() const {
        return czy_leczy;
    }
    void zadajObrazenia(Wrog& wrog) const {
        wrog.punktyZycia -= this->punkty;
    }
    void ulecz(ObiektGry& gracz) const {
        gracz.punktyZycia += this->punkty;
    }

};

template <typename T>
class SkrzyniaSkarbow {
private:
    vector<T> przedmioty;

public:
    void dodajPrzedmiot(const T& przedmiot) {
        przedmioty.push_back(przedmiot);
    }

    void usunPrzedmiot(size_t index) {
        if (index < przedmioty.size()) {
            przedmioty.erase(przedmioty.begin() + index);
        }
    }

        void wyswietlPrzedmioty() const {
        cout << "Zawartosc Skrzyni Skarbow:" << endl;
        for (size_t i = 0; i < przedmioty.size(); ++i) {
            cout << i << ": " << przedmioty[i] << endl;
        }
    }

    const T& pobierzPrzedmiot(size_t index) const {
        if (index < przedmioty.size()) {
            return przedmioty.at(index);
        } else {
            throw out_of_range("Nieprawidlowy indeks");
        }
    }

    size_t liczbaPrzedmiotow() const {
        return przedmioty.size();
    }

    bool czyPelna(size_t maxPojemnosc) const {
        return przedmioty.size() >= maxPojemnosc;
    }
};



#endif // HEADER_H_INCLUDED
