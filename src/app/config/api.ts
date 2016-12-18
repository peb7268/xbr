
/**
 * https://xboxapi.com/documentation
 * 
 * Keys and examples
 * api_key:9ea9b24cc9dd72aec8be38327da080d102201628
 * profile_user_id:2533274913118677
 * curl -s -H "X-AUTH: 9ea9b24cc9dd72aec8be38327da080d102201628" https://xboxapi.com/v2/accountxuid
 * curl -i -H "X-AUTH: 9ea9b24cc9dd72aec8be38327da080d102201628" https://xboxapi.com/v2/accountxuid
 */

export const API_KEY         = '9ea9b24cc9dd72aec8be38327da080d102201628';
export const PROFILE_USER_ID = '2533274913118677';

export const MOCK            = {
  "GamesWithGold": [
    {
      "TitleName": "Outlast",
      "ListPriceText": "$19.99",
      "DiscountedPriceText": "Free with",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcHdIJ5tipiEIbOwd9Qp.QcvjgOWU68DqNLV7Y3_ceFi6qMfkih9MIXx62yDnFb8CQ5lyFbpaWHSZ2DhQedPmjAm2v4daZh1cTEXP6ov4f45QekCZOI0ozUt9TSqP7By3m45rrd8ICwu_mFCpXr9HwixGGJCQxC3uCHe9ztRNveaA-&w=282&h=424&format=jpg",
      "SubscriptionImage": "https://compass-ssl.xboxlive.com/assets/1f/b4/1fb4b510-25e9-4271-ba3e-4d2e2d952c53.png?n=gold-wht.png",
      "TitleId": 196423588,
      "ID": "e30cee6d-748d-4356-98bb-3471ed257ade",
      "ReleaseDate": "6/19/2014 12:00:00 AM"
    },
    {
      "TitleName": "Sleeping Dogs™ Definitive Edition",
      "ListPriceText": "$29.99",
      "DiscountedPriceText": "Free with",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc3zp_MzcvOnFpNoimrfkmDO1EL_NQwQsYGhqGfz.39jHyK6FmqXJnrLHxWgzYob2xp_shCzR5i1Ku00ybKNwxs9XPp3K.YLuc3Ta4XQnqjcPiX.QIirfXaw9LQi.bAEgM8SeGhIQkyjAEr.96peTNzDZrHvE1HJ1_ILUvxZqqpTY-&w=282&h=424&format=jpg",
      "SubscriptionImage": "https://compass-ssl.xboxlive.com/assets/1f/b4/1fb4b510-25e9-4271-ba3e-4d2e2d952c53.png?n=gold-wht.png",
      "TitleId": 367254866,
      "ID": "cc9cac48-36b3-4574-85e3-965abe32b133",
      "ReleaseDate": "10/14/2014 12:00:00 AM"
    }
  ],
  "DealsWithGold": [
    {
      "TitleName": "Battle Worlds: Kronos",
      "ListPriceText": "$19.99",
      "DiscountedPriceText": "$8.00",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcyTRcIIbraD3wdnpD.8735awljnEVW6ovyweEqYuckjSWV7l2zVmehDGRN80Wy9K4q3WFPRbmmqX4IgARAU6Og1_4fpcvgZbGiwvuYeTVwMr.7RF.BR_.2kR3K1PoXTciQ.Jtql0cgE6wnpffG28l2JgmN2jYOqu5JoLtSVAy0hs-&w=282&h=424&format=jpg",
      "TitleId": 350348742,
      "ReleaseDate": "4/26/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "c3332380-872d-44f3-b55d-8df8bc381dde"
    },
    {
      "TitleName": "Mordheim: City of the Damned",
      "ListPriceText": "$39.99",
      "DiscountedPriceText": "$26.79",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcw2Jqu7xpOA29hmRi3ctL62JVLxc7x7vAgDauyGwSGw3MB9arfLB4lCoR3s_IRedcmpkiJt80r2Y0iqakHFcAe6_I1zun8J56GzWi_bw_i6mkJE7D5eStAF8Ick6ScT1hxO_hxDDSyC1UDaG9A.4xjfa_0LiKHWArkfOXTsjqFas-&w=282&h=424&format=jpg",
      "TitleId": 1150103050,
      "ReleaseDate": "10/18/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "296c8fbc-f97d-4e38-ba07-4ebc27723b4c"
    },
    {
      "TitleName": "Farming Simulator 15",
      "ListPriceText": "$39.99",
      "DiscountedPriceText": "$13.20",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcELTSDp8YZPRaxoMaQp9JrakZoLAqut1kP.kUi8P5B4WzkF8A9yju1q2AQycLLY10hif4YP4ql8fhKoevrgwwwADJ0V8RLoTCj8SFicztXlY9UqQKBFHUTLcz931MbqP_B8xul9LqldKEhR3kjzJecgVqU24iKaAsQGc7uPXxafY-&w=282&h=424&format=jpg",
      "TitleId": 918516972,
      "ReleaseDate": "5/19/2015 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "05e6f254-6a46-49c1-93a0-f740899d86a6"
    },
    {
      "TitleName": "Dogos",
      "ListPriceText": "$11.99",
      "DiscountedPriceText": "$8.03",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcLOOtWLzSpMP7_ot6dQWeTiTPAQHDFzMib0OeeV92I7t_g7vJFYmjqZ6zm82b48lnOA7LTv2o.h8OE6JN1nxZ1SjBY48kBX7Nl.wS4Nle0rm2yHNLBMMd9NVmMBlZfT1cxBhiq3XtI9h1PHAa5fTpH7y1TuBv6_XauKeMu82eAfk-&w=282&h=424&format=jpg",
      "TitleId": 667003203,
      "ReleaseDate": "9/7/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "4a979482-7ce8-4c8c-aa17-9d937253248d"
    },
    {
      "TitleName": "Saturday Morning RPG",
      "ListPriceText": "$9.99",
      "DiscountedPriceText": "$7.99",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTciLANbdZao5IG.SIJ6bvKnzewB8r3WBp2GZso6bg4QL2tCNWCJXUSU6sTOowelUgRsb2z_h2iP9F_SXm1V4P5JInzNjB6XdXZ.77GSRxnNc01JO.nrDYhm6ER98cwpG.kqAhwE.cXtPd1Xhzu8N7keGVP01p1Z1QD3x.HdB3DTeU-&w=282&h=424&format=jpg",
      "TitleId": 329611518,
      "ReleaseDate": "10/26/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "9b2bcf8c-ff16-4372-bc36-b4a11b7f4954"
    },
    {
      "TitleName": "Boss of all Bosses Bundle",
      "ListPriceText": "$99.99",
      "DiscountedPriceText": "$59.99",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcm4bBJPxTwPobJEkR.E4PvHLlJWc6QHeqF9pwv80DpViYpGGah3b6zZ8Xc8_mYIbK3ueF7rhRsy7_ETvsZZz1xMy7R1NorOqKb6khgIqo7Y3AEZtddEJqf0nUD1ln_yXYHMOaSC5MPd6uZ4JCKgkabYn1I7_115CPBQpapexOToQ-&w=282&h=424&format=jpg",
      "ReleaseDate": "8/16/2016 12:00:00 AM",
      "MediaItemType": "DConsumable",
      "ID": "49043b50-a26b-471e-a7a2-803e48b7efed"
    },
    {
      "TitleName": "Octodad: Dadliest Catch",
      "ListPriceText": "$14.99",
      "DiscountedPriceText": "$3.75",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcqNLKMU7qnpRB3H2QfTUwUDSWNKrhQLkYE0t79tGEOKhhE0Kqcfzg409u8ntWVkGqNP1nMNvFyyzJGUVi60yw9NFIvJqhBMzd_NT.gGvtkdwoQyD5ZlYvDTswbtqb.v6fcMDE79iS7TjHXgZD8Gg8SfBKGE9irGX_sOn9056TmZE-&w=282&h=424&format=jpg",
      "TitleId": 1059087507,
      "ReleaseDate": "8/26/2015 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "86819cf2-a525-4457-bfb9-982e54773038"
    },
    {
      "TitleName": "TRANSFORMERS: Fall of Cybertron",
      "ListPriceText": "$49.99",
      "DiscountedPriceText": "$29.99",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc0SdzR2v0y8Hjh2ygNu91aXFGCE5BTZu2IIlOYkhQPJhum3nt1NF_9u7Z_oORxtp5I5kQicJ85z62f8yFdkWIrkVfSE0y.Hzt_QHu59ps0VQ50qHpzvtqNq_mXKy9xvPf9mu.CYMImoqHSm0VRxX.FZNUf5BfOXpevheFO_lEM3A-&w=282&h=424&format=jpg",
      "TitleId": 286890904,
      "ReleaseDate": "8/9/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "648acf0f-b3b9-402d-8930-38bd9f35df94"
    },
    {
      "TitleName": "Mortal Kombat XL",
      "ListPriceText": "$39.99",
      "DiscountedPriceText": "$20.00",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc.OsIRQiYGw.O61ir4P9z5BOCrGygz0m54rXIJIQ_AmtfrZNauKkh3KQ1zP5pr5Q56avvVuC72xdk85KpO_.RouL7KJxDfCPEHWk3YyDJ7a8rnu.uKA63rSVUmocV.rumeoGSVGeDeT.ORUC2.UOxhftcjxBC_9xkueJpKrhHt04-&w=282&h=424&format=jpg",
      "TitleId": 116109587,
      "ReleaseDate": "3/1/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "87f4aff1-5b64-4ccb-845d-1e8af4b49f9b"
    },
    {
      "TitleName": "The Amazing Spider-Man 2™",
      "ListPriceText": "$59.99",
      "DiscountedPriceText": "$19.80",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcqVaut9YOuBdgC2acaV3euicaAqjElVkCZ.KEYEqOw1bXPfu_hOxtd4lWKdKwUjuB.U_TNiLx6y1vGHvMuEnNjMGhr_VpBqVkr8WnKH3O6LToGbqIFSoN6rgPvMQ2V4XASB9AizrM4rexGrIGRQ7MXSjNf4MMUB05FNmec6DtxOE-&w=282&h=424&format=jpg",
      "TitleId": 1999803984,
      "ReleaseDate": "4/29/2014 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "b0c4e193-1a5c-4530-9933-4400adc3f16b"
    },
    {
      "TitleName": "Letter Quest: Grimm's Journey/Three Fourths Home Extended Edition Bundle",
      "ListPriceText": "$14.99",
      "DiscountedPriceText": "$7.50",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcj6Dzx4Nrr1STBv3UiR1IcLM.V9TA.ZopFmxN_hcEqB9TEeaqkhgiPQjzXqaJuJtxh6JeYm88Tyec.WWs92.Dbmp2gSTizsQp6QP0m7zCNCKzFRrszhBJfkQV0yfuB7so9iicZYHorqYX66l9JzwC2JKVhiuRh9mNfzxNUcCxFf0-&w=282&h=424&format=jpg",
      "TitleId": 91496922,
      "ReleaseDate": "7/1/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "981dee16-d9c5-4eaa-b2e2-2e943e7b9bd7"
    },
    {
      "TitleName": "Divinity: Original Sin - Enhanced Edition",
      "ListPriceText": "$59.99",
      "DiscountedPriceText": "$15.00",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcs3k8fQmMa7ZslTHdi2VjU3EaquFF89GcPZJK2D.IuvbP2RNoW2GOw6bymCFyaezCoXQOZkthSm8xu0Sa1pk4FJQhIciuCtZ1HyXOwdE1RyggnFdYJ6EH6NZtKHn3Gy0mA29bOM8R9eDj2zCZvz31UIxdmXsV5VZAC6Won_DCqPc-&w=282&h=424&format=jpg",
      "TitleId": 92688185,
      "ReleaseDate": "10/27/2015 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "3e7ebbb5-856d-4445-946b-7dfb69194a89"
    },
    {
      "TitleName": "Teenage Mutant Ninja Turtles™: Mutants in Manhattan",
      "ListPriceText": "$49.99",
      "DiscountedPriceText": "$20.00",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcJAwrZs5.F.PjxCL9xVFuwwxb7TYDt6sFw6iKPLcQm5FCtTCqYISJ4u0zFwH0QIJpCl97pUHDzMBpytJ3eHPxjGEVqWDCI6weQYiYsFFlVqHbrZuEZBbVi2OAjKnugcVxRyxIAdaw7oYJVWltriRm1O0dC3MOg9HDS3WD6NcVifk-&w=282&h=424&format=jpg",
      "TitleId": 29770197,
      "ReleaseDate": "5/24/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "b0ea970a-ba16-48c3-b34c-652f3e5747b7"
    },
    {
      "TitleName": "Dying Light: The Following - Enhanced Edition",
      "ListPriceText": "$39.99",
      "DiscountedPriceText": "$23.99",
      "TitleImage": "http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcT56MVvhD0ANIHQZuherZ7oZ3.lrIObTGXqX._idjQxoIAzlGAM2MpstplcQFVOm5LB8DtTnArOTozTXYXfqqD4WmqEVW1JSnarXVcO.h.wT8Df0nXHBvpfpW76tLmtw8i_q8e67g4ugIk_PgH781C.x3C9fnL6Y7CQhCmYVQLtw-&w=282&h=424&format=jpg",
      "TitleId": 623921602,
      "ReleaseDate": "2/9/2016 12:00:00 AM",
      "MediaItemType": "DGame",
      "ID": "deb4f210-32e1-41a8-8402-b54352243489"
    }
  ]
};