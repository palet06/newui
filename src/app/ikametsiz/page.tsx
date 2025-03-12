import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { FloatLabel } from "primereact/floatlabel";

export default function BasicDemo() {
  return (
    <div className="card -z-[1px] flex flex-col gap-9 ">
      <TabView>
        <TabPanel header="Şahıs">
          <div className="card flex flex-col gap-4">
            <Fieldset className="py-5" legend="Konsolosluk Yakını Ekleme">
              <div className="card grid grid-cols-2   gap-10">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon ">
                    <i className="pi pi-user"> </i>
                  </span>
                  <FloatLabel>
                    <InputText disabled id="username" value="Deneme İsmi" />
                    <label className=" font-bold" htmlFor="username">
                      Adı
                    </label>
                  </FloatLabel>
                </div>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon ">
                    <i className="pi pi-user"> </i>
                  </span>
                  <FloatLabel>
                    <InputText disabled id="surname" value="Deneme Soyadı" />
                    <label className=" font-bold" htmlFor="surname">
                      Soyadı
                    </label>
                  </FloatLabel>
                </div>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon ">
                    <i className="pi pi-user"> </i>
                  </span>
                  <FloatLabel>
                    <InputText disabled id="mother" value="Deneme Ana Adı" />
                    <label className=" font-bold" htmlFor="mother">
                      Ana Adı
                    </label>
                  </FloatLabel>
                </div>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon ">
                    <i className="pi pi-user"> </i>
                  </span>
                  <FloatLabel>
                    <InputText disabled id="father" value="Deneme Baba Adı" />
                    <label className=" font-bold" htmlFor="father">
                      Baba Adı
                    </label>
                  </FloatLabel>
                </div>
                <div className="p-inputgroup flex-1">
                  <FloatLabel>
                    <InputText disabled id="uyruk" value="Deneme Uyruk" />
                    <label className=" font-bold" htmlFor="uyruk">
                      Uyruk
                    </label>
                  </FloatLabel>
                </div>
                <div className="p-inputgroup flex-1">
                  <FloatLabel>
                    <InputText disabled id="tarih" value="09/01/1999" />
                    <label className=" font-bold" htmlFor="tarih">
                      Doğum Tarihi
                    </label>
                  </FloatLabel>
                </div>
                <div className="p-inputgroup flex-1">
                  <FloatLabel>
                    <InputText id="konsolos" value=" " />
                    <label className=" font-bold" htmlFor="konsolos">
                      Konsolosluk
                    </label>
                  </FloatLabel>
                </div>
                <div className="p-inputgroup flex-1">
                  <FloatLabel>
                    <InputText disabled id="yer" value="Deneme Yer" />
                    <label className=" font-bold" htmlFor="yer">
                      Verildiği Yer
                    </label>
                  </FloatLabel>
                </div>

                <div className=" col-span-2 ">
                  <IconField className="w-full" iconPosition="right">
                    <InputIcon className="pi pi-search "> </InputIcon>
                    <InputText
                      id="dd"
                      className="w-full"
                      placeholder="Diplomat"
                    />
                  </IconField>
                </div>
              </div>
            </Fieldset>
          </div>
        </TabPanel>

        <TabPanel header="İşyeri">
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
      </TabView>

      <div className="card">
        <Fieldset className="py-5" legend="Konsolosluk Yakını Listesi">
          <div className="card grid grid-cols-2   gap-10"></div>
        </Fieldset>
      </div>
    </div>
  );
}
