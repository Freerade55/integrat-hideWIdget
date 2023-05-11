


define(['jquery'], function ($) {

  var CustomWidget = function () {
    var self = this,
        system = self.system;



    this.callbacks = {
      render: function () {



        return true;
      },

      init: function () {

        // поля:

        // менеджер Онлайн конс - 756526
        // провел конс 1 - 754704
        // провел конс 2 - 754708
        // назначил показ 1 - 754710
        // назначил показ 2 - 754712
        // поставил бронь - 589689
        
        
        
        // воронки ЖК:                                      группа:


        // 1393867 KRD - guber                              group_211237
        // 4551384 KRD - guber parking

        // 3302563 KRD - dost
        // 4703964 KRD - dost parking

        // 6427297 KRD - architec
        // 6427333 KRD - architec parking




        // 1399426 RND - veres                              group_211243
        // 4551393 RND - veres parking

        // 4242663 RND - Levobereg
        // 5133726 RND - Levobereg parking

        // 5771604 RND - JK AEROPORT



        // 4551390 STV - Kvartal                             group_211240
        // 5521488 STV - Kvartal parking

        // 5129982 STV - Vysota
        // 5133513 STV - Vysota Parking

        // 1399423 STV - stavropol










        if ( self.system().area === "lcard" ) {


          let group = null;


          const currentPipeline = Number( AMOCRM.data.current_card.model.attributes[ 'lead[PIPELINE_ID]' ] );

          switch (currentPipeline) {

            case 1393867:
            case 4551384:
            case 3302563:
            case 4703964:
            case 6427297:
            case 6427333:
              group = "group_211237";
              break;

            case 1399426:
            case 4551393:
            case 4242663:
            case 5133726:
            case 5771604:
              group = "group_211243";
              break;


            case 4551390:
            case 5521488:
            case 5129982:
            case 5133513:
            case 1399423:
              group = "group_211240";
              break;






          }

          if(group !== null) {



            const users = AMOCRM.constant("managers");

            const fields = [756526, 754704, 754708, 754710, 754712, 754714];


            fields.forEach(field => {

              const element = document.querySelector(`[data-id="${field}"]`);

              const ul = element.querySelector('.custom-scroll.gnzs-contractor--list---2qmx4tv7eWgULFEQKWAWRe').children;

              // li элементы, в них лежат span элементы

              ul.forEach(item => {


                // item.children[0].innerText - имя менеджера в селект поле


                const fieldUserName = item.children[0].innerText;

                for (var userInfo in users) {

                  const crmUserName =  users[userInfo].title;
                  const crmUserStatus = users[userInfo].active;
                  const crmUserGroup = users[userInfo].group;


                  if(fieldUserName == crmUserName) {

                    if(crmUserGroup !== group || crmUserStatus === false) {

                      item.style.display = 'none';

                      break;


                    }

                  }




                }








              })


            })





          }


















        }










          return true;
      },

      bind_actions: function () {



        return true;
      },
      settings: function () {
        return true;
      },
      onSave: function () {
        return true;
      },
      destroy: function () {

      }
    };
    return this;
  };

  return CustomWidget;
});
























