import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TopicPage } from "./topic";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [TopicPage],
  imports: [PipesModule, IonicPageModule.forChild(TopicPage)]
})
export class TopicPageModule {}
