export default function legendToggle(_e: any, legendItem: any, legend: any) {
    var index = legendItem.datasetIndex;
    var ci = legend.chart;
    var meta = ci.getDatasetMeta(index);

    meta.hidden = meta.hidden === true ? false : false;

    ci.data.datasets.forEach(function (_ds: any, i: any) {
        if (i !== index) {
            ci.getDatasetMeta(i).hidden = true;
        }
    });

    ci.update();
}
