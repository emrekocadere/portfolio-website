import React from 'react';
import { Radio, Typography } from 'antd';

const { Paragraph } = Typography;


export default function AboutmeContent() {
    return (

        <div className='aboutme' style={{
            justifyContent: "center", display: "flex",
            borderStyle: "solid", borderWidth: "2px", borderColor: "#A838D8",
            borderRadius: "30px", width: "65vw",
            backgroundSize: "cover", backgroundColor: "rgba(67, 22, 86, 0.4)"
        }}>

            <a
                style={{ color: "white", margin: "30px", fontFamily: "Source Code Pro', monospace" }}>
                SMS Blücher,[Not 1] Alman İmparatorluk Donanması'nın son imal edilen zırhlı kruvazörü. Alman istihbaratınca, hatalı olarak İngiliz Invincible sınıfı kruvazörlerine ait olduğu zannedilen özelliklere göre tasarlanan Blücher, önceki zırhlı kruvazörlere göre daha büyük olup, daha fazla ağır silah taşısa da büyüklük ve silah bakımından Birleşik Krallık ile Alman donanmalarında zırhlı kruvazörler yerine getirilen muharebe kruvazörleriyle rekabet edebilecek konumda değildi. Gemi, ismini 1815 yılındaki Waterloo Muharebesi'nde Prusya kuvvetlerine komuta eden Generalfeldmarschall Gebhard Leberecht von Blücher'den almıştı.

                Blücher, 1907 ile 1909 yılları arasında Kiel'deki Kaiserliche Werft Kiel tersanesinde inşa edildi ve ilk seferine 1 Ekim 1909 tarihinde çıktı. I. Dünya Savaşı'nın ilk zamanları da dâhil olmak üzere görev süresinin çoğunu I. Keşif Grubu'na bağlı olarak geçiren Blücher, 1914 yılında Scarborough, Hartlepool ve Whitby ile Yarmouth Baskını'nda yer aldı.

                24 Ocak 1915 tarihinde yapılan Dogger Bank Muharebesi sırasında, Koramiral David Beatty komutasındaki İngiliz muharebe kruvazörü filosunun top atışlarında isabet alan Blücher, yavaşladı. Tuğamiral Franz von Hipper, Alman muharebe kruvazörlerini takip eden İngiliz donanmasını oyalamak için Blücher'i arkada bıraktı. İngiliz gemilerinin ağır topçu ateşi karşısında gemi batarken, hayatta kalan mürettebat İngiliz muhripleri tarafından kurtarıldı. Bir Alman zeplininin batmakta olan Blücher'i İngiliz muharebe kruvazörü zannederek yanlışlıkla bombalaması sebebiyle İngiliz muhripleri kurtarma çalışmalarını bırakarak mecburî olarak geri çekildi. Verilen kayıp sayısı kesin olarak bilinmemekle birlikte, tahminler 747-1.000 arasındadır.

                Tasarımı
                Alman zırhlı kruvazörleri "Büyük Kruvazör" (Almanca "Große Kreuzer") olarak adlandırılırdı ve birçok farklı görevi yerine getirebilmek için inşa edilirdi. Gemiler, düşman donanmaların keşif hareketlerini engellemekle beraber savaş hattında da muharebe edebilmek üzere tasarlanırdı.[2] En eski zırhlı kruvazör olan Fürst Bismarck, 1900 yılında Çin'de çıkan Boxer Ayaklanması'nı bastırabilmek için aceleye getirilmişti. Sonraki zırhlı kruvazörler -Scharnhorst sınıfı zırhlı kruvazörler hariç- keşif görevinde bulunmak üzere donanmaya hizmet etti.[3]
            </a>

        </div>

    );
}